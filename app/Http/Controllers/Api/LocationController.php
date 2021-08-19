<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\RecordNotFoundException;
use App\Http\Controllers\Controller;
use App\Http\Resources\LocationResource;
use App\Models\Location;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $locations = Location::all();

        return response()->json(LocationResource::collection($locations), 200);
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
            'name' => 'required|string|unique:locations,name|min:3|max:50',
            'status' => 'required|boolean',
        ]);

        Location::create($attributes);

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
        try{
            $location = Location::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        return response()->json(new LocationResource($location), 200);
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
        $attributes = $request->validate([
            'name' => 'required|string|min:3|max:50|unique:locations,name,'.$id,
            'status' => 'required|boolean',
        ]);

        try{
            $location = Location::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        $location->update($attributes);

        return response()->json([
            "message" => "Record updated successfully."
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $location = Location::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        $location->delete();

        return response()->json([
            "message" => "Record deleted successfully"
        ], 202);
    }
}
