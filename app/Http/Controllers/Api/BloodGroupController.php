<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\RecordNotFoundException;
use App\Http\Controllers\Controller;
use App\Http\Resources\BloodGroupResource;
use App\Models\BloodGroup;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class BloodGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bloodGroups = BloodGroup::all();
        return response()->json(BloodGroupResource::collection($bloodGroups), 200);
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
            $bloodGroup = BloodGroup::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            throw new RecordNotFoundException();
        }

        return response()->json(new BloodGroupResource($bloodGroup), 200);
    }

}
