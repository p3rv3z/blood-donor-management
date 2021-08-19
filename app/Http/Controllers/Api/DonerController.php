<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\RecordNotFoundException;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class DonerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doners = User::with(['location', 'bloodGroup'])->get();

        return response()->json(UserResource::collection($doners), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $attributes = $request->validate([
            'name' => 'required|string|min:2|max:50',
            'father_name' => 'nullable|string|min:2|max:25',
            'date_of_birth' => 'date_format:Y-m-d|nullable|date|before:18 years ago',

            'blood_group_id' => 'required|integer|exists:blood_groups,id',
            'donated' => 'nullable|integer|max:100',
            'received' => 'nullable|integer|max:100',
            'donated_at' => 'date_format:Y-m-d|nullable|date|before:tomorrow',

            'location_id' => 'required|integer|exists:locations,id',
            'address' => 'required|string|max:255',
            'facebook_id' => 'nullable|string|max:50|unique:users,facebook_id',

            'phone' => 'required|regex:/(01)[0-9]{9}/|digits:11|unique:users,phone',
            'email' => 'nullable|email|unique:users,email',

            'approved' => 'required|boolean',
        ]);

        $attributes['approved_at'] = $attributes['approved'] ? now() : null;
        $attributes['recorded_by'] = auth()->id();

        User::create($attributes);

        return response()->json([
            "message" => "Record created successfully."
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $doner = User::findOrFail($id)->loadMissing(['location', 'bloodGroup']);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        return response()->json(new UserResource($doner), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $doner = User::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        $attributes = $request->validate([
            'name' => 'required|string|min:2|max:50',
            'father_name' => 'nullable|string|min:2|max:25',
            'date_of_birth' => 'date_format:Y-m-d|nullable|date|before:18 years ago',

            'blood_group_id' => 'required|integer|exists:blood_groups,id',
            'donated' => 'nullable|integer|max:100',
            'received' => 'nullable|integer|max:100',
            'donated_at' => 'date_format:Y-m-d|nullable|date|before:tomorrow|',

            'location_id' => 'required|integer|exists:locations,id',
            'address' => 'required|string|max:255',
            'facebook_id' => 'nullable|string|max:50|unique:users,facebook_id',

            'phone' => 'required|regex:/(01)[0-9]{9}/|digits:11|unique:users,phone',
            'email' => 'nullable|email|unique:users,email',

            'approved' => 'required|boolean',
        ]);

        return $attributes;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $doner = User::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        $doner->delete();

        return response([
            'message' => "Record deleted successfully."
        ], 202);
    }
}
