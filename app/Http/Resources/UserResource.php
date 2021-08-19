<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    return [
      'id' => $this->id,
      'ubd_id' => $this->ubd_id,
      'name' => $this->name,
      'father_name' => $this->father_name,
      'date_of_birth' => $this->date_of_birth,

      'location' => new LocationResource($this->whenLoaded('location')),
      'address' => $this->address,
      'facebook_id' => $this->facebook_id,

      'bloodGroup' => new BloodGroupResource($this->whenLoaded('bloodGroup')),
      'donated' => $this->donated,
      'received' => $this->received,
      'donated_at' => $this->donated_at,

      'phone' => $this->phone,
      'email' => $this->email,

      'approved_at' => $this->approved_at,
      'recorded_by' => $this->recorded_by,

      'created_at' => $this->created_at,
    ];
  }
}
