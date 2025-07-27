(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C569846_2948_C03F_41AB_E2214544461A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.95,
   "yaw": 168.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0606_1752049167672",
 "id": "panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739",
 "thumbnailUrl": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_tcap0",
  "this.overlay_5688955B_428C_45CD_41B0_5AFC00EC0CCF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -23.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6272357F_4717_3B93_41BD_14CB64D7EC03",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 134.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_634DA483_4717_3973_41C7_4B4247A8D446",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 151.35,
   "yaw": 10.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9"
  },
  {
   "backwardYaw": 15.55,
   "yaw": 166.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0559_1752049167672",
 "id": "panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE",
 "thumbnailUrl": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E36BB7A_29C8_40D4_41A1_6785D2DD93D1",
  "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_tcap0",
  "this.overlay_52150759_4287_C5CD_41D0_0A631AFA2037"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.43,
   "yaw": 20.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1"
  },
  {
   "backwardYaw": -21.66,
   "yaw": 106.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0579_1752049167672",
 "id": "panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A",
 "thumbnailUrl": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_tcap0",
  "this.overlay_368BDE09_2732_384A_41B8_676BE9651480",
  "this.overlay_52C02882_428C_4B3F_41C9_9E986751FFBD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60CCE0BF_4717_3A93_41C1_E8A5F0ED12BE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -166.9,
   "yaw": -17.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59"
  },
  {
   "backwardYaw": -21.66,
   "yaw": 157.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0564_1752049167672",
 "id": "panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB",
 "thumbnailUrl": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09798FA4_2938_4073_41AE_5E7711B31DBF",
  "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_tcap0",
  "this.overlay_52A7049B_4284_5B4D_41C2_47CD9FB9374C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -79.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63E50423_4717_39B3_41B1_3C1223C18F85",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -126.67,
   "yaw": 156.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF"
  },
  {
   "backwardYaw": -26.19,
   "yaw": -12.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0623_1752049167672",
 "id": "panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02",
 "thumbnailUrl": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0C52D154_2C67_CC1C_419E_F240FF0F35EE",
  "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_tcap0",
  "this.overlay_51634A66_4284_CFC7_4188_C2A95E320953"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 42.94,
   "yaw": -46.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0595_1752049167672",
 "id": "panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592",
 "thumbnailUrl": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_tcap0",
  "this.overlay_56B1DD14_4284_455B_41B6_FEE5E02ABD5F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_609BB0E3_4717_3AB3_41C8_E3F7C7A0A877",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.45,
   "yaw": -22.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06"
  },
  {
   "backwardYaw": -19.77,
   "yaw": 170.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0607_1752049167672",
 "id": "panorama_38F8E63D_2BE4_F416_41BF_924667D66142",
 "thumbnailUrl": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_38A02814_36D9_5407_41C0_B931C45CC5C0",
  "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142_tcap0",
  "this.overlay_502A2DA8_4284_454B_41B2_84AC68915129"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E",
 "thumbnailUrl": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_t.jpg",
 "label": "GS__0593_1752049167672",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0",
  "this.overlay_5F70D8A3_471B_2AB3_41AE_D25915400B44",
  "this.overlay_5C7DFD24_4739_2BB5_41A4_46810D2F375E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 149.84,
   "yaw": -160.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0"
  },
  {
   "backwardYaw": -8.06,
   "yaw": 3.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0610_1752049167672",
 "id": "panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF",
 "thumbnailUrl": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1D0501C4_2CA5_CCB4_4182_D19B41503936",
  "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_tcap0",
  "this.overlay_50791BAA_4284_4D4F_41C2_4F8C3899B622"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 53.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_645823E6_4717_3EB5_41B3_239801767A86",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6104F088_4717_397D_41B0_2789549FCD98",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 71.08,
   "yaw": -13.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119"
  },
  {
   "backwardYaw": -20.52,
   "yaw": -168.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0555_1752049167672",
 "id": "panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A",
 "thumbnailUrl": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02EA56A1_29D8_4075_41A4_B50D4A3D8852",
  "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_tcap0",
  "this.overlay_52F17D55_4284_45C5_41C5_B53D80FEE3E8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -55.84,
   "yaw": 105.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0585_1752049167672",
 "id": "panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9",
 "thumbnailUrl": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_tcap0",
  "this.overlay_53873CC4_4284_4B3B_41B9_FC64AC3031A6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 152.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66A461E6_4717_3AB5_4193_FFC854BDEE78",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6262C58B_4717_3B73_419E_9A12A93CBEF9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.41,
   "yaw": 169.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF"
  },
  {
   "backwardYaw": 171.94,
   "yaw": 13.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0620_1752049167672",
 "id": "panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC",
 "thumbnailUrl": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09ABBFCF_2C64_540C_41C2_968C6E76525E",
  "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_tcap0",
  "this.overlay_571686DE_4284_44C6_4194_94F25FDD926B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6391E449_4717_39FF_41C3_7BFBE2DCE27C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65779320_4717_3FAD_41CB_70800DFD3AE4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66AF81F8_4717_3A9D_41B3_832999B8D145",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 159.29,
   "yaw": -43.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6"
  },
  {
   "backwardYaw": -16.94,
   "yaw": -173.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0552_1752049167672",
 "id": "panorama_3C52509F_294B_C04D_4184_C839697DC89E",
 "thumbnailUrl": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_05984356_29D8_C0DF_41B0_0ED44C5354E3",
  "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E_tcap0",
  "this.overlay_520575DD_4284_C4C5_41D0_246D860BA5E0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65CE52E3_4717_3EB3_41A7_62827CBA28CA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 171.37,
   "yaw": 9.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5"
  },
  {
   "backwardYaw": -45.46,
   "yaw": 102.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0629_1752049167672",
 "id": "panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0",
 "thumbnailUrl": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_31EF4F1E_2BFC_540F_4191_D1FD14984137",
  "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_tcap0",
  "this.overlay_56FD682D_429C_4B45_41C3_ACC387A37008"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 124.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_652E7368_4717_3FBD_4183_B1A08C198A22",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.57,
   "yaw": -172.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0588_1752049167672",
 "id": "panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0",
 "thumbnailUrl": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_376CCEE9_2738_C1F4_41B6_2EDB9D5D9C90",
  "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -12.59,
   "yaw": -26.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02"
  },
  {
   "backwardYaw": -21.09,
   "yaw": 149.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0625_1752049167672",
 "id": "panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561",
 "thumbnailUrl": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_32B04E73_2C6F_F414_41AC_90569F4A4259",
  "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_tcap0",
  "this.overlay_56749E3B_429C_474D_41A3_1EE13B584669"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_654E234D_4717_3FF7_41C3_C229CE312926",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_620C25BC_4717_3A96_41C7_1BF834125AB5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 133.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6582D30F_4717_3F73_41CF_FC104EF5598D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592"
  },
  {
   "backwardYaw": 146.25,
   "yaw": -3.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0633_1752049167672",
 "id": "panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A",
 "thumbnailUrl": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3F095DD4_2BEC_F410_41C2_CCB5E284CFA6",
  "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_tcap0",
  "this.overlay_5BDB0168_4709_3BBD_41B9_C436E9059B5A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64CEB3AD_4717_3EB7_41C0_2BE4C83EADEB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 156.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63C34431_4717_39AF_41C7_FD3D5C7FAF07",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_638FD458_4717_399D_41C9_D14A41DE62E2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.4,
   "yaw": -167.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB"
  },
  {
   "backwardYaw": 161.55,
   "yaw": 111.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0612_1752049167672",
 "id": "panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38",
 "thumbnailUrl": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_00E21F82_2C5D_B4BE_41B0_675F936C525C",
  "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_tcap0",
  "this.overlay_51A5137D_428C_3DC5_4188_4CFDD49B9970"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_609090DA_4717_3A9D_41C1_1D7847487A7A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63818451_4717_39EF_41AC_32BB07EE6F94",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_647C43D7_4717_3E93_41D0_DD7292A5CC83",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -19.58,
   "yaw": 161.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA"
  },
  {
   "backwardYaw": 169.49,
   "yaw": -12.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0562_1752049167672",
 "id": "panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4",
 "thumbnailUrl": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B584EF4_29C8_C1D3_4187_961E92B5D57D",
  "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_tcap0",
  "this.overlay_52F636D0_4284_44DB_41C3_A93F15291E9D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64F07385_4717_3F77_417C_73B359E36AD4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6433B3F4_4717_3E95_41B7_16E81AA916CE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 124.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6672F223_4717_39B3_4187_1F615DA111E3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62D8950E_4717_3B75_41C8_CCBBA0E16E36",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -33.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61FB85C4_4717_3AF5_41CA_DC53AF2C69E2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_637E445E_4717_3995_41B4_BE5BF760E5D3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 170.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_624E55A1_4717_3AAF_41C1_220ACFA1FFA3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 148.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_630AB4D6_4717_3A95_41C7_E4DB1B077FB4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 149.46,
   "yaw": -14.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B"
  },
  {
   "backwardYaw": 13.55,
   "yaw": -161.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0581_1752049167672",
 "id": "panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4",
 "thumbnailUrl": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28FA6069_2736_08CA_41B2_D9054FEE607F",
  "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_tcap0",
  "this.overlay_53B484A4_4284_3B7B_41CB_12C3F2896A8C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61EBF5CB_4717_3AF3_41C1_8A197383CAA4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -69.25,
   "yaw": 128.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7"
  },
  {
   "backwardYaw": 105.08,
   "yaw": -55.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0584_1752049167672",
 "id": "panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8",
 "thumbnailUrl": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_363A0372_21B6_4E8B_41B9_A611F6C92737",
  "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_tcap0",
  "this.overlay_53B66F6E_4284_45C7_41C6_66DDAE5C6FEE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 153.62,
   "yaw": 141.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C"
  },
  {
   "backwardYaw": -31.29,
   "yaw": -162.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0617_1752049167672",
 "id": "panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517",
 "thumbnailUrl": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A8E1599_2C63_D419_41BF_FFAC0E975CED",
  "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_tcap0",
  "this.overlay_569AE1E5_4284_5CC5_419D_C441EE6FEDFF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61D9C5D3_4717_3A93_41BA_EA4D040974CA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 23.29,
   "yaw": -174.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59"
  },
  {
   "backwardYaw": -175.03,
   "yaw": 13.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0568_1752049167672",
 "id": "panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592",
 "thumbnailUrl": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_37683645_2939_C03C_41C2_BF1F1F25B02F",
  "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_tcap0",
  "this.overlay_52AEB85F_4283_CBC6_41C2_72AA1C8FC826"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61C9F5DA_4717_3A9D_41CC_5C47CE214751",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66124293_4717_3E93_41C1_E177434A0AEA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6607A2A4_4717_3EB6_41C4_E0EF92AEAF8D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -18.45,
   "yaw": 155.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99"
  },
  {
   "backwardYaw": 148.14,
   "yaw": -21.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0577_1752049167672",
 "id": "panorama_3BB43E82_2949_C037_419E_721673465960",
 "thumbnailUrl": "media/panorama_3BB43E82_2949_C037_419E_721673465960_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB43E82_2949_C037_419E_721673465960_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3DE2B19F_2978_404D_41A8_6FFE962AC596",
  "this.panorama_3BB43E82_2949_C037_419E_721673465960_tcap0",
  "this.overlay_52E7166B_428C_47CE_416C_6C3AB4CB42EB"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -23.74,
   "yaw": 166.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119"
  },
  {
   "backwardYaw": -169.93,
   "yaw": -15.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0557_1752049167672",
 "id": "panorama_3BBAF629_2948_4075_418B_5B811352E2F1",
 "thumbnailUrl": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_002E02DA_29D9_C1D7_4190_8DF7F7DCF605",
  "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1_tcap0",
  "this.overlay_52C61905_4284_CD3A_41CD_7C1C6042564C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6524C35F_4717_3F93_41BF_B5234B8D35DF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_643F23FC_4717_3E95_41C9_C48B1F758679",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65619329_4717_3FBF_41CF_C14A7E8BAB95",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63B33438_4717_399D_4167_F96211F9011E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 153.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_642D3404_4717_3975_41B2_0050DCC3D3BE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.76,
   "yaw": -9.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0"
  },
  {
   "backwardYaw": 84.11,
   "yaw": -55.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7"
  },
  {
   "backwardYaw": -14.8,
   "yaw": 149.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0582_1752049167672",
 "id": "panorama_16B219D6_1DFA_F262_41B3_F285ED30573B",
 "thumbnailUrl": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_295313C1_2736_083A_41C3_5B267BEACC58",
  "this.overlay_29EBB35C_2738_40D3_4186_4656CF695A5E",
  "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_tcap0",
  "this.overlay_52FABA70_4284_4FDB_41CC_D441A4F77AF9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -173.14,
   "yaw": -16.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E"
  },
  {
   "backwardYaw": -20.15,
   "yaw": 162.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0551_1752049167672",
 "id": "panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723",
 "thumbnailUrl": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06BE9617_29C8_C05D_41B3_DF9E5E6F7829",
  "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_tcap0",
  "this.overlay_4D6B0935_4284_4D45_417B_90B754486661"
 ]
},
{
 "hfovMin": "150%",
 "label": "GS__0596_1752049167672",
 "id": "panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE",
 "thumbnailUrl": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_t.jpg",
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_tcap0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60DF30B6_4717_3A95_41BE_5B59AFD8616E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 160.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66BAC1D4_4717_3A96_41CA_CE3A43C0478F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 100.73,
   "yaw": -4.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06"
  },
  {
   "backwardYaw": 171.56,
   "yaw": 173.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0598_1752049167672",
 "id": "panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E",
 "thumbnailUrl": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_23AD52E0_36EB_D43B_41C6_6D888F32F03B",
  "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_tcap0",
  "this.overlay_56E9E36B_428C_3DCD_41C8_EC549E4F2A66"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62500592_4717_3B6D_41AF_D0D0016F608F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 100.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65AC12FD_4717_3E97_4176_26364B80BE7D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_658B6318_4717_3F9D_41CC_1C638CDB8BBB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.95,
   "yaw": -21.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA"
  },
  {
   "backwardYaw": -3.9,
   "yaw": 146.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0632_1752049167672",
 "id": "panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC",
 "thumbnailUrl": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3C6619E9_2BE5_BC30_41B2_81318A06E934",
  "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_tcap0",
  "this.overlay_516AF142_429D_DD3F_41BC_D2D13F5C1436"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 17.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6678C22B_4717_39B3_41CF_6150CD9C04EB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38F8E63D_2BE4_F416_41BF_924667D66142_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -15.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_649693C2_4717_3EED_41C6_493F491C0790",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65B8E2EB_4717_3EB2_41D1_DA3D86DE846C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 4.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63F7341C_4717_3995_41C2_B0195AF33D4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -166.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_636D9466_4717_39B5_41D0_FAC2F6FE05C5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62E8B4FB_4717_3A93_41CA_CED8F60DECD6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.56,
   "yaw": -8.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077"
  },
  {
   "backwardYaw": 9.13,
   "yaw": 171.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0628_1752049167672",
 "id": "panorama_38800178_2BE5_CC1F_41B8_04260E2988D5",
 "thumbnailUrl": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30FB19EA_2BE4_7C37_41C4_0AFF901A0223",
  "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_tcap0",
  "this.overlay_5675AD6A_429C_45CF_41A3_977509FA25DB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -30.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62C6C521_4717_3BAF_41C0_75BE9121E545",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 157.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65DAC2D1_4717_3EEF_4184_30F3436AF99D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6654224E_4717_39F5_41C4_58E8BF6D0C24",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6634A270_4717_39AD_41D1_E76D27AF8135",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -30.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65C352DA_4717_3E9D_41C7_0C63705B4AA4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -30.35,
   "yaw": 157.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD"
  },
  {
   "backwardYaw": 164.39,
   "yaw": -20.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0572_1752049167672",
 "id": "panorama_3C5D0926_2948_407F_41AD_366AF91FB872",
 "thumbnailUrl": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3218299D_295B_C04D_41B9_5342D5E8D06B",
  "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872_tcap0",
  "this.overlay_539F8FA5_428C_4545_41C4_C1890E2A6E75"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 160.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65FB82B7_4717_3E93_41B3_BCA2748A5F4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -108.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_621DB5B6_4717_3A95_41D1_95897282F886",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_656C4333_4717_3F93_41BE_B7EC0558EC3B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -17.12,
   "yaw": -166.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB"
  },
  {
   "backwardYaw": -174.84,
   "yaw": 23.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0567_1752049167672",
 "id": "panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59",
 "thumbnailUrl": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_087BA3D1_2938_C7D5_41B4_CB129A114A58",
  "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_tcap0",
  "this.overlay_52194183_4284_5D3E_41B6_BCB19DDAAC56"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000
  }
 ],
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "id": "panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_631AB4BE_4717_3A95_41C0_F2B20441C284",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66959201_4717_396F_41C0_B9DE0B6EC224",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -158.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60D4A0AC_4717_3AB5_41B4_A52E85EEC68D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "camera": "this.panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "camera": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "camera": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "camera": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "camera": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "camera": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "camera": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "camera": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "camera": "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "camera": "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "camera": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "camera": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "camera": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "camera": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "camera": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "camera": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "camera": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "camera": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "camera": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "camera": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "camera": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "camera": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "camera": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "camera": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "camera": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "camera": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "camera": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "camera": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "camera": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "camera": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "camera": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "camera": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "camera": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "camera": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "camera": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB43E82_2949_C037_419E_721673465960",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "camera": "this.panorama_3BB43E82_2949_C037_419E_721673465960_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "camera": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "camera": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "camera": "this.panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "camera": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "camera": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "camera": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "camera": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "camera": "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "camera": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "camera": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "camera": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "camera": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "camera": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50)",
   "camera": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51)",
   "camera": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 52)",
   "camera": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 52, 53)",
   "camera": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 53, 54)",
   "camera": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 54, 55)",
   "camera": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 55, 56)",
   "camera": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 56, 57)",
   "camera": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 57, 58)",
   "camera": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 58, 59)",
   "camera": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 59, 60)",
   "camera": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 60, 61)",
   "camera": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 61, 62)",
   "camera": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 62, 63)",
   "camera": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 63, 64)",
   "camera": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 64, 65)",
   "camera": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 65, 66)",
   "camera": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 66, 0)",
   "camera": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB43E82_2949_C037_419E_721673465960_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -26.57,
   "yaw": 161.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0"
  },
  {
   "backwardYaw": 170.62,
   "yaw": -19.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0608_1752049167672",
 "id": "panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668",
 "thumbnailUrl": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1E39ECAE_2CAC_74FA_41B6_4B7280F3F7CC",
  "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_tcap0",
  "this.overlay_50572336_4287_DD47_41B6_A2141D3C380E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C52509F_294B_C04D_4184_C839697DC89E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65A392F4_4717_3E95_41B2_FD1F695978C6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 111.31,
   "yaw": 161.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38"
  },
  {
   "backwardYaw": 3.27,
   "yaw": -8.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0611_1752049167672",
 "id": "panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16",
 "thumbnailUrl": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0235E8DE_2CA4_5C4C_41BD_E886100EC294",
  "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_tcap0",
  "this.overlay_51FDA45C_428C_7BCA_4174_1984822B7568"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63A14440_4717_39ED_41CD_EC9F0765A97C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -30.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6644F25F_4717_3993_41A5_8A98B062A9C0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.18,
   "yaw": -26.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668"
  },
  {
   "backwardYaw": -160.67,
   "yaw": 149.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0609_1752049167672",
 "id": "panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0",
 "thumbnailUrl": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1CF2C143_2CA3_CDAF_419E_2D09E0727703",
  "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_tcap0",
  "this.overlay_504FAA88_4284_4F4B_41C6_24B66416F6CA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C5D0926_2948_407F_41AD_366AF91FB872_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_3C569846_2948_C03F_41AB_E2214544461A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3BB43E82_2949_C037_419E_721673465960",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_3BB43E82_2949_C037_419E_721673465960_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "camera": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "camera": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "camera": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "camera": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "camera": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "camera": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "camera": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 66)",
   "camera": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 66, 0)",
   "camera": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60E7C0A3_4717_3AB2_4197_C90F60CE8640",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -164.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60421110_4717_3B6D_41C6_590F457C184D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 161.55,
   "yaw": 168.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06"
  },
  {
   "backwardYaw": 168.35,
   "yaw": -9.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0604_1752049167672",
 "id": "panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40",
 "thumbnailUrl": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_247C1C7B_36D8_EC01_41B1_7B1C075EF07F",
  "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_tcap0",
  "this.overlay_56D2E41B_428C_5B4D_419E_F6F8E90F70EA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66826211_4717_396F_41C2_C078663A0261",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6482E3CA_4717_3EFD_41BA_FD2F1303FE6B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.44,
   "yaw": 117.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9"
  },
  {
   "backwardYaw": 161.18,
   "yaw": -19.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0561_1752049167672",
 "id": "panorama_3C538239_2948_C055_41B2_378D20A97BBA",
 "thumbnailUrl": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EF18104_29C8_4033_4179_A83188263305",
  "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA_tcap0",
  "this.overlay_52165848_4284_4BCB_41CA_5CB60752320F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_608770EC_4717_3AB5_41C4_B6FFA514D197",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.83,
   "yaw": -12.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7"
  },
  {
   "backwardYaw": -20.52,
   "yaw": 148.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0574_1752049167672",
 "id": "panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6",
 "thumbnailUrl": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30FA7393_2948_C055_41B2_4F1BDC33CC82",
  "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_tcap0",
  "this.overlay_523964BF_428C_3B46_414F_97AAD7C37CDF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_606420FE_4717_3A95_41AE_56BEB8E1D473",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -55.41,
   "yaw": 84.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B"
  },
  {
   "backwardYaw": 128.88,
   "yaw": -69.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0583_1752049167672",
 "id": "panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7",
 "thumbnailUrl": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_304FACCF_2176_5BE7_41B5_D0A26F0BEFE8",
  "this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_tcap0",
  "this.overlay_5314F0DB_4284_DCCD_41AC_B817CD2D8A0E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.81,
   "yaw": 170.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5"
  },
  {
   "backwardYaw": 161.36,
   "yaw": 4.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0627_1752049167672",
 "id": "panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077",
 "thumbnailUrl": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_36D7B941_2BE4_7C75_41A5_3BAA2A10A559",
  "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_tcap0",
  "this.overlay_514C57E7_429D_C4C5_41A3_F891E109B231"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -166.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6660F234_4717_3995_41C5_F9BC9210F540",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_663DC279_4717_399F_41AB_96AF500A79EC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64088414_4717_3995_41A3_95430D3A44BA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6282256D_4717_3BB7_419C_55DEBD411936",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_666ED246_4717_39F5_41A2_A5A1BF082B29",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60F0E091_4717_396F_41A0_8A8A19C816BF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 159.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62B63535_4717_3B97_41B6_042E35CEA3CD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64E64395_4717_3E97_41A2_4A4B0C66F986",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 158.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6119E080_4717_396D_41C0_91FCFAF28CDE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 164.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61372065_4717_39B7_41C2_2F8D7834CCD9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -28.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6053A107_4717_3B73_41A4_612FD34EEF23",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -62.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64FC038D_4717_3F77_41CE_C62035D3DFAA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_633B1496_4717_3A95_41C3_D8F4C46373E0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_622D85AF_4717_3AB3_419A_040775C9C1D2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_661CF29C_4717_3E95_41C8_67FA8BD04928",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60FC609A_4717_3A9D_418B_997F88AB3FF3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 167.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65385356_4717_3F95_41C1_09431D93E31A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 167.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_646A03DF_4717_3E93_4194_3A8701EBF62C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 165.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_669C7209_4717_397F_41BC_021C014FA00C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_635C646E_4717_39B5_41CA_1A671683F8C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6556533C_4717_3F95_41C5_5418DFE81D33",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.52,
   "yaw": -27.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99"
  },
  {
   "backwardYaw": -12.78,
   "yaw": 173.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0575_1752049167672",
 "id": "panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7",
 "thumbnailUrl": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3FC99F80_2978_4033_41B7_5ADCFF120E0D",
  "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_tcap0",
  "this.overlay_53A96A22_428F_CF7F_41C4_CC8346901B06"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -21.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6470C3D0_4717_3EED_41B8_EE7D104F9D8A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 7.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_623E15A7_4717_3AB3_41C0_A3D42AF8FFCF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.21,
   "yaw": 42.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592"
  },
  {
   "backwardYaw": 173.07,
   "yaw": 171.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0597_1752049167672",
 "id": "panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76",
 "thumbnailUrl": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_208718A4_36E9_543F_41A2_7647E7BAEAC6",
  "this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_tcap0",
  "this.overlay_5627253A_4283_C54F_41CC_A2A1BBB081D6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64C0F3A5_4717_3EB7_41CD_8AB78E0D5676",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.24,
   "yaw": 159.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6"
  },
  {
   "backwardYaw": -168.79,
   "yaw": -20.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0554_1752049167672",
 "id": "panorama_3BB69578_2948_40D3_418F_97DE00A915B6",
 "thumbnailUrl": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0300BDBD_29D8_C04C_41AA_FFDDC7CEB370",
  "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6_tcap0",
  "this.overlay_5386668D_4285_C74A_41B8_022BA6DBA888"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64D3239E_4717_3E95_41C9_F48B214B71FA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_63D50429_4717_39BF_41B5_040771A39856",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -166.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_664A3268_4717_39BD_41B3_BAF531495305",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 161.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6666C23D_4717_3997_41BC_87ECB3DFC785",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 19.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_632B34A9_4717_3ABF_4187_BE05F64FA6AC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 160.99,
   "yaw": -171.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB"
  },
  {
   "backwardYaw": -19.77,
   "yaw": 150.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0614_1752049167672",
 "id": "panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147",
 "thumbnailUrl": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0021320E_2C5C_CFDC_41BF_82657FB46DBC",
  "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_tcap0",
  "this.overlay_5626A087_428C_5B45_41A9_DB43DE32C1C9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBAF629_2948_4075_418B_5B811352E2F1_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 18.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6294555A_4717_3B9D_41BB_1EC93C6B4063",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.41,
   "yaw": 161.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077"
  },
  {
   "backwardYaw": 149.46,
   "yaw": -21.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0626_1752049167672",
 "id": "panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E",
 "thumbnailUrl": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_35559853_2BEC_5C14_41B2_9B6A03417CCC",
  "this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_tcap0",
  "this.overlay_5178946C_429C_DBCB_41BF_6E255CF6192D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -4.47,
   "yaw": 100.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E"
  },
  {
   "backwardYaw": 168.73,
   "yaw": 161.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40"
  },
  {
   "backwardYaw": -22.41,
   "yaw": -79.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0602_1752049167672",
 "id": "panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06",
 "thumbnailUrl": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_24A264CE_36DB_5C03_41B2_C6A76B8A3103",
  "this.overlay_254E3804_36E9_7406_41B7_DDFAE7165CBF",
  "this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_tcap0",
  "this.overlay_56906475_428D_DBC5_41AE_2D67BBBFA9A6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 154.94,
   "yaw": 9.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD"
  },
  {
   "backwardYaw": 13.28,
   "yaw": -175.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0570_1752049167672",
 "id": "panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C",
 "thumbnailUrl": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3609A29F_2939_C04C_4194_1AE23BBA2749",
  "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_tcap0",
  "this.overlay_539BFD11_428C_455C_41C2_0F32C8A9757A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -24.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66A991EF_4717_3AB3_4194_F8533EEA4628",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -14.48,
   "yaw": 150.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A"
  },
  {
   "backwardYaw": 162.5,
   "yaw": -20.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0550_1752049167672",
 "id": "panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659",
 "thumbnailUrl": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_066E1F3A_29CB_C054_4195_B776510DF2B0",
  "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_tcap0",
  "this.overlay_52F3D39D_4283_FD4A_41CB_7F2964EA2403"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -168.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62F8E4E8_4717_3ABD_41D0_8036D2012D97",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_668AC21A_4717_399D_41C1_312C65D8EBF9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -27.32,
   "yaw": 165.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7"
  },
  {
   "backwardYaw": 155.7,
   "yaw": -18.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB43E82_2949_C037_419E_721673465960"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0576_1752049167672",
 "id": "panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99",
 "thumbnailUrl": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3F7A238E_2978_C04F_41B5_675DAFAE3BAF",
  "this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_tcap0",
  "this.overlay_53BCBFD4_428C_C4DB_41BB_0301D39B07FA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 150.03,
   "yaw": -14.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0549_1752049167672",
 "id": "panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A",
 "thumbnailUrl": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_tcap0",
  "this.overlay_4D176875_429C_CBDA_419A_9C7FF0732B99",
  "this.overlay_5E55B194_470B_5A95_41B3_BA15A53C6314"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 163.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6240D598_4717_3A9D_41D1_211DEE4DEE8A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C538239_2948_C055_41B2_378D20A97BBA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66BF81DD_4717_3A97_41BA_E48E4C6E9CE2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6075A0F4_4717_3A95_41A1_FBEE4AAEA0E5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 153.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6445E3ED_4717_3EB7_41CD_735279D4B7C2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65EF32C9_4717_3EFF_41CA_6D7859EF6C8B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.18,
   "yaw": 161.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C"
  },
  {
   "backwardYaw": 150.03,
   "yaw": -19.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0615_1752049167672",
 "id": "panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72",
 "thumbnailUrl": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_075136C2_2C6C_545E_41C5_64E31BD4B41D",
  "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_tcap0",
  "this.overlay_5188F598_428C_C54B_41CE_679C10814B8C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65427344_4717_3FF5_41CD_24ADA2CCD535",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.05,
   "yaw": -169.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1"
  },
  {
   "backwardYaw": 166.27,
   "yaw": 15.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0558_1752049167672",
 "id": "panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D",
 "thumbnailUrl": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0FB4432A_29C7_C077_4156_9F278AB9A68D",
  "this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_tcap0",
  "this.overlay_52C2B743_4284_453E_41BA_9DC8C4BE5454"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 20.47,
   "yaw": -161.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A"
  },
  {
   "backwardYaw": -161.05,
   "yaw": 13.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0580_1752049167672",
 "id": "panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1",
 "thumbnailUrl": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_373A1C16_2732_1846_41C3_546BF115BA20",
  "this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_tcap0",
  "this.overlay_5398FCCA_4284_44CE_41C1_4C5F1C6784BF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 149.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64A8F3BB_4717_3E93_41D0_B86337AEE286",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_651A0372_4717_3FAD_419C_D5E0F59FBBF7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -19.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65F0C2AE_4717_3EB5_41C7_27182D6A7689",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.37,
   "yaw": -31.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517"
  },
  {
   "backwardYaw": 13.1,
   "yaw": 171.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0618_1752049167672",
 "id": "panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA",
 "thumbnailUrl": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_082003E0_2C64_4C32_41C1_98F77810E7F8",
  "this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_tcap0",
  "this.overlay_513F0873_4284_CBDD_41AC_4C61211116D6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.57,
   "yaw": 159.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C52509F_294B_C04D_4184_C839697DC89E"
  },
  {
   "backwardYaw": 159.29,
   "yaw": -15.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0553_1752049167672",
 "id": "panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6",
 "thumbnailUrl": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_04C3C7D1_29D8_CFD5_41C2_BED31DE6C8CC",
  "this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_tcap0",
  "this.overlay_522EEF1C_4284_C54B_41A8_36F6324A919F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60B790C8_4717_3AFD_41C5_7D8C727E8B80",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 167.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64BB53B3_4717_3E93_41AA_CF3469478191",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 160.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65971306_4717_3F75_41BB_31BB23FB0025",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.47,
   "yaw": -172.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC"
  },
  {
   "backwardYaw": 158.53,
   "yaw": 21.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0631_1752049167672",
 "id": "panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA",
 "thumbnailUrl": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_32C3CC91_2BE4_F413_4190_10866D6F4D81",
  "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_tcap0",
  "this.overlay_51786D29_429C_C54D_41AE_943357EB9CD5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_665CE257_4717_3993_41CF_29BA4FD19428",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65E422C0_4717_3EED_41D0_070EF6A438D9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_62A47548_4717_3BFD_4197_19C4D1708B6E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.17,
   "yaw": -8.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C538239_2948_C055_41B2_378D20A97BBA"
  },
  {
   "backwardYaw": 10.26,
   "yaw": 151.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0560_1752049167672",
 "id": "panorama_3BB99717_2948_C05C_41C2_9081E5372DE9",
 "thumbnailUrl": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D58CF85_29C8_C03D_41B4_3AAC4D7DA15C",
  "this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_tcap0",
  "this.overlay_525E54F4_4284_44DA_41C7_BBEC68206B21"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 156.26,
   "yaw": -126.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02"
  },
  {
   "backwardYaw": 169.11,
   "yaw": 4.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0622_1752049167672",
 "id": "panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF",
 "thumbnailUrl": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F614F13_2C7C_5414_4183_06EB64FC32E5",
  "this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_tcap0",
  "this.overlay_56E061BA_4285_DD4F_41C9_A3963F5E935C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 157.21,
   "yaw": -21.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB"
  },
  {
   "backwardYaw": -12.78,
   "yaw": 169.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0563_1752049167672",
 "id": "panorama_3C569846_2948_C03F_41AB_E2214544461A",
 "thumbnailUrl": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B82A834_29C8_4053_41A3_87EED0B898E5",
  "this.panorama_3C569846_2948_C03F_41AB_E2214544461A_tcap0",
  "this.overlay_523F2D51_4285_C5DD_41B2_1876375DD5AB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3BB69578_2948_40D3_418F_97DE00A915B6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_641AB40C_4717_3976_41D0_6AAE6DD2AD9D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -167.85,
   "yaw": 11.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38"
  },
  {
   "backwardYaw": -171.82,
   "yaw": 160.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0613_1752049167672",
 "id": "panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB",
 "thumbnailUrl": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0278D927_2C5C_BDC1_41C4_121D02D5C398",
  "this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_tcap0",
  "this.overlay_5145B78B_428C_C54D_41C0_811BB291CC16"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -20.34,
   "yaw": 164.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872"
  },
  {
   "backwardYaw": 148.71,
   "yaw": -20.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0573_1752049167672",
 "id": "panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0",
 "thumbnailUrl": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_31F27549_2958_4035_41AB_7E7B7D0B909A",
  "this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_tcap0",
  "this.overlay_52A3ADB9_428C_454D_41C0_10E6ED83A386"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.09,
   "yaw": -23.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1"
  },
  {
   "backwardYaw": -13.91,
   "yaw": 71.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0556_1752049167672",
 "id": "panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119",
 "thumbnailUrl": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02C75436_29D8_405F_4162_5D88E6E5DAD7",
  "this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_tcap0",
  "this.overlay_52F1A955_4284_CDDA_4194_AEC44337F268"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 141.53,
   "yaw": 153.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517"
  },
  {
   "backwardYaw": 161.36,
   "yaw": -16.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0616_1752049167672",
 "id": "panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C",
 "thumbnailUrl": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06B00E57_2C6C_D46B_41BB_93EF09F983F4",
  "this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_tcap0",
  "this.overlay_51F6D1B4_428C_5D5B_41BF_0962B210FA93"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 164.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6506137C_4717_3F95_41A7_5E44FCB89A5A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 106.97,
   "yaw": -21.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A"
  },
  {
   "backwardYaw": -21.85,
   "yaw": 148.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BB43E82_2949_C037_419E_721673465960"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0578_1752049167672",
 "id": "panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211",
 "thumbnailUrl": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3D40719E_2948_404F_41C2_D94FFC6CDECE",
  "this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_tcap0",
  "this.overlay_527DE2D8_428D_FCCB_41B0_B00ACCD62E36"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6122806E_4717_39B5_41B8_2ABC38AF9B47",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 157.21,
   "yaw": -30.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872"
  },
  {
   "backwardYaw": 9.51,
   "yaw": 154.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0571_1752049167672",
 "id": "panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD",
 "thumbnailUrl": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_33F11515_2958_C05C_41BC_475006ECF7B3",
  "this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_tcap0",
  "this.overlay_52E6E072_428C_3BDE_41C8_DEC1E9571436"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.78,
   "yaw": 158.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA"
  },
  {
   "backwardYaw": 102.43,
   "yaw": -45.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "GS__0630_1752049167672",
 "id": "panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33",
 "thumbnailUrl": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_332615E4_2BFC_5432_41BC_DE5083E9EF36",
  "this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_tcap0",
  "this.overlay_56CB5CA6_429F_CB47_41A8_7F3B48BA1339"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60A310D1_4717_3AEF_41CD_C38CACD373C8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6628E286_4717_3975_41CB_A0AA45CE7635",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 13.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_612C6077_4717_3993_41B8_80F25C017EFB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "layout": "absolute",
 "width": 115.05,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 641,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "layout": "absolute",
 "left": 30,
 "width": 573,
 "scrollBarColor": "#000000",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "top": 15,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": 133,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "layout": "absolute",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "minWidth": 1,
 "bottom": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": 118,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.64,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "layout": "absolute",
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "layout": "absolute",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "layout": "absolute",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "layout": "absolute",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40, this.camera_624E55A1_4717_3AAF_41C1_220ACFA1FFA3); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.11,
   "image": "this.AnimatedImageResource_55C03B3B_4717_2F93_4192_42AF463B7961",
   "pitch": -15.96,
   "yaw": 168.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5688955B_428C_45CD_41B0_5AFC00EC0CCF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.11,
   "yaw": 168.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9, this.camera_6053A107_4717_3B73_41A4_612FD34EEF23); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.15,
   "image": "this.AnimatedImageResource_265F0F0B_3789_812F_41BD_E4A35D95A06B",
   "pitch": -15.2,
   "yaw": 10.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E36BB7A_29C8_40D4_41A1_6785D2DD93D1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.15,
   "yaw": 10.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.2
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D, this.camera_60421110_4717_3B6D_41C6_590F457C184D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.29,
   "image": "this.AnimatedImageResource_564FC723_4284_457E_41BE_00C741A65B67",
   "pitch": -12.56,
   "yaw": 166.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52150759_4287_C5CD_41D0_0A631AFA2037",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 166.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.56
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1, this.camera_6294555A_4717_3B9D_41BB_1EC93C6B4063); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_565BB716_4284_4547_41B6_A044D6018717",
   "pitch": -12.53,
   "yaw": 20.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_368BDE09_2732_384A_41B8_676BE9651480",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 20.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211, this.camera_6282256D_4717_3BB7_419C_55DEBD411936); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.19,
   "image": "this.AnimatedImageResource_565BC718_4284_454A_41C7_6B89F38059E1",
   "pitch": -14.45,
   "yaw": 106.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52C02882_428C_4B3F_41C9_9E986751FFBD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.19,
   "yaw": 106.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59, this.camera_612C6077_4717_3993_41B8_80F25C017EFB); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_564B2725_4284_4545_41A1_154403704D94",
   "pitch": -13.32,
   "yaw": -17.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09798FA4_2938_4073_41AE_5E7711B31DBF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.25,
   "yaw": -17.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.32
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C569846_2948_C03F_41AB_E2214544461A, this.camera_6119E080_4717_396D_41C0_91FCFAF28CDE); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_564AA725_4284_4545_415E_82C49085FB06",
   "pitch": -14.26,
   "yaw": 157.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52A7049B_4284_5B4D_41C2_47CD9FB9374C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 157.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF, this.camera_645823E6_4717_3EB5_41B3_239801767A86); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.04,
   "image": "this.AnimatedImageResource_54309B42_4717_2FED_41C4_DA0199DBAD5C",
   "pitch": -17.09,
   "yaw": 156.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0C52D154_2C67_CC1C_419E_F240FF0F35EE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.04,
   "yaw": 156.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.09
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561, this.camera_6445E3ED_4717_3EB7_41CD_735279D4B7C2); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.04,
   "image": "this.AnimatedImageResource_51B13016_4283_DB47_41B6_E0A7B2FE9837",
   "pitch": -17.09,
   "yaw": -12.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51634A66_4284_CFC7_4188_C2A95E320953",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.04,
   "yaw": -12.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.09
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76, this.camera_63818451_4717_39EF_41AC_32BB07EE6F94); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_55DB6B38_4717_2F9E_41B6_6D75D68DB0DA",
   "pitch": 0.66,
   "yaw": -46.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56B1DD14_4284_455B_41B6_FEE5E02ABD5F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": -46.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06, this.camera_65AC12FD_4717_3E97_4176_26364B80BE7D); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_266A7F29_3789_8168_41AD_321178B82648",
   "pitch": -3.49,
   "yaw": -22.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38A02814_36D9_5407_41C0_B931C45CC5C0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.57,
   "yaw": -22.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.49
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38F8E63D_2BE4_F416_41BF_924667D66142_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668, this.camera_65971306_4717_3F75_41BB_31BB23FB0025); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.71,
   "image": "this.AnimatedImageResource_504E100D_4283_DB45_41BE_A08DFD1B795C",
   "pitch": -21.63,
   "yaw": 170.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_502A2DA8_4284_454B_41B2_84AC68915129",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 170.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.63
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0_HS_2_0.png",
      "width": 600,
      "class": "ImageResourceLevel",
      "height": 450
     }
    ]
   },
   "pitch": 16.82,
   "yaw": -34.32,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5F70D8A3_471B_2AB3_41AE_D25915400B44",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.9,
   "yaw": -34.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0_HS_3_0.png",
      "width": 600,
      "class": "ImageResourceLevel",
      "height": 450
     }
    ]
   },
   "pitch": 16.63,
   "yaw": 13.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5C7DFD24_4739_2BB5_41A4_46810D2F375E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.93,
   "yaw": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_0_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0, this.camera_65C352DA_4717_3E9D_41C7_0C63705B4AA4); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_26774F2C_3789_8169_41C6_1577541675E9",
   "pitch": -9.54,
   "yaw": -160.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1D0501C4_2CA5_CCB4_4182_D19B41503936",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -160.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16, this.camera_65CE52E3_4717_3EB3_41A7_62827CBA28CA); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.19,
   "image": "this.AnimatedImageResource_504D200F_4283_DB45_41CE_52F16A7926B0",
   "pitch": -14.45,
   "yaw": 3.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50791BAA_4284_4D4F_41C2_4F8C3899B622",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.19,
   "yaw": 3.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119, this.camera_621DB5B6_4717_3A95_41D1_95897282F886); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.14,
   "image": "this.AnimatedImageResource_26528F07_3789_8118_419B_51C231D49456",
   "pitch": -15.39,
   "yaw": -13.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02EA56A1_29D8_4075_41A4_B50D4A3D8852",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.14,
   "yaw": -13.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.39
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6, this.camera_620C25BC_4717_3A96_41C7_1BF834125AB5); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.38,
   "image": "this.AnimatedImageResource_56529722_4284_457E_4165_83B675D75314",
   "pitch": -10.48,
   "yaw": -168.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52F17D55_4284_45C5_41C5_B53D80FEE3E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.38,
   "yaw": -168.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.48
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8, this.camera_6672F223_4717_39B3_4187_1F615DA111E3); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.18,
   "image": "this.AnimatedImageResource_5656A71E_4284_4547_41CB_13894AEC1A9D",
   "pitch": -14.64,
   "yaw": 105.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53873CC4_4284_4B3B_41B9_FC64AC3031A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.18,
   "yaw": 105.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA, this.camera_64C0F3A5_4717_3EB7_41CD_8AB78E0D5676); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.56,
   "image": "this.AnimatedImageResource_55CEEB41_4717_2FEF_415F_38F53E079672",
   "pitch": -4.25,
   "yaw": 13.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09ABBFCF_2C64_540C_41C2_968C6E76525E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.56,
   "yaw": 13.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.25
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF, this.camera_64D3239E_4717_3E95_41C9_F48B214B71FA); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.3,
   "image": "this.AnimatedImageResource_51B20014_4283_DB5B_41C5_CA7C6DD2DE8F",
   "pitch": -12.37,
   "yaw": 169.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_571686DE_4284_44C6_4194_94F25FDD926B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.3,
   "yaw": 169.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6, this.camera_62500592_4717_3B6D_41AF_D0D0016F608F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.37,
   "image": "this.AnimatedImageResource_5654471F_4284_4545_41B6_77AA84BA7CB0",
   "pitch": -10.86,
   "yaw": -43.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_05984356_29D8_C0DF_41B0_0ED44C5354E3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.37,
   "yaw": -43.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.86
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C52509F_294B_C04D_4184_C839697DC89E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723, this.camera_6240D598_4717_3A9D_41D1_211DEE4DEE8A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.44,
   "image": "this.AnimatedImageResource_5653D720_4284_457B_41C4_6A93FB9D3564",
   "pitch": -8.97,
   "yaw": -173.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_520575DD_4284_C4C5_41D0_246D860BA5E0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.44,
   "yaw": -173.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5, this.camera_635C646E_4717_39B5_41CA_1A671683F8C9); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_25844F47_3789_8127_41C2_3D428ACB3267",
   "pitch": -3.12,
   "yaw": 9.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31EF4F1E_2BFC_540F_4191_D1FD14984137",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.57,
   "yaw": 9.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.12
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33, this.camera_634DA483_4717_3973_41C7_4B4247A8D446); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_51B0E01A_4283_DB4E_41BA_8938A046BC96",
   "pitch": -7.65,
   "yaw": 102.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56FD682D_429C_4B45_41C3_ACC387A37008",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.48,
   "yaw": 102.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B, this.camera_638FD458_4717_399D_41C9_D14A41DE62E2); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.81,
   "image": "this.AnimatedImageResource_26567F00_3789_8119_41CB_C21710DAA853",
   "pitch": -45.61,
   "yaw": -172.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_376CCEE9_2738_C1F4_41B6_2EDB9D5D9C90",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.81,
   "yaw": -172.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.61
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02, this.camera_65385356_4717_3F95_41C1_09431D93E31A); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_51B11016_4283_DB47_41C5_B9C9E23EADDC",
   "pitch": -9.35,
   "yaw": -26.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32B04E73_2C6F_F414_41AC_90569F4A4259",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -26.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.35
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E, this.camera_6524C35F_4717_3F93_41BF_B5234B8D35DF); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.18,
   "image": "this.AnimatedImageResource_51B0D016_4283_DB47_41BF_359EBBFC3FC4",
   "pitch": -14.64,
   "yaw": 149.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56749E3B_429C_474D_41A3_1EE13B584669",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.18,
   "yaw": 149.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC, this.camera_61FB85C4_4717_3AF5_41CA_DC53AF2C69E2); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.48,
   "image": "this.AnimatedImageResource_264CEEF7_3789_80E7_4185_4C5A146BF77A",
   "pitch": -24.27,
   "yaw": -3.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F095DD4_2BEC_F410_41C2_CCB5E284CFA6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.48,
   "yaw": -3.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.27
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0_HS_2_0.png",
      "width": 600,
      "class": "ImageResourceLevel",
      "height": 450
     }
    ]
   },
   "pitch": 16.82,
   "yaw": -4.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5BDB0168_4709_3BBD_41B9_C436E9059B5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.9,
   "yaw": -4.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16, this.camera_62E8B4FB_4717_3A93_41CA_CED8F60DECD6); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.52,
   "image": "this.AnimatedImageResource_2674CF31_3789_817B_41C5_73995DE5218D",
   "pitch": -33.34,
   "yaw": 111.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_00E21F82_2C5D_B4BE_41B0_675F936C525C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.52,
   "yaw": 111.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.34
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB, this.camera_62F8E4E8_4717_3ABD_41D0_8036D2012D97); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.51,
   "image": "this.AnimatedImageResource_504C7010_4283_DB5B_41C4_BB701492208F",
   "pitch": -6.52,
   "yaw": -167.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51A5137D_428C_3DC5_4188_4CFDD49B9970",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.51,
   "yaw": -167.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C569846_2948_C03F_41AB_E2214544461A, this.camera_66BF81DD_4717_3A97_41BA_E48E4C6E9CE2); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.33,
   "image": "this.AnimatedImageResource_265C6F0E_3789_8129_41B2_71849DC43ED4",
   "pitch": -11.8,
   "yaw": -12.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B584EF4_29C8_C1D3_4187_961E92B5D57D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.33,
   "yaw": -12.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.8
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C538239_2948_C055_41B2_378D20A97BBA, this.camera_66BAC1D4_4717_3A96_41CA_CE3A43C0478F); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.28,
   "image": "this.AnimatedImageResource_564CA724_4284_457A_41C4_E1DEAC78FDFB",
   "pitch": -12.75,
   "yaw": 161.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52F636D0_4284_44DB_41C3_A93F15291E9D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.28,
   "yaw": 161.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B, this.camera_6644F25F_4717_3993_41A5_8A98B062A9C0); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.33,
   "image": "this.AnimatedImageResource_565A1718_4284_454A_41C6_817ACED8BF67",
   "pitch": -10.96,
   "yaw": -14.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28FA6069_2736_08CA_41B2_D9054FEE607F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.33,
   "yaw": -14.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.96
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1, this.camera_664A3268_4717_39BD_41B3_BAF531495305); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.4,
   "image": "this.AnimatedImageResource_5659B718_4284_454A_41CA_36BB53CED426",
   "pitch": -10.1,
   "yaw": -161.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53B484A4_4284_3B7B_41CB_12C3F2896A8C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.4,
   "yaw": -161.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9, this.camera_609090DA_4717_3A9D_41C1_1D7847487A7A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.97,
   "image": "this.AnimatedImageResource_26578EFF_3789_80E8_41A2_9730C9D24A7E",
   "pitch": -18.04,
   "yaw": -55.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_363A0372_21B6_4E8B_41B9_A611F6C92737",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.97,
   "yaw": -55.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.04
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7, this.camera_60A310D1_4717_3AEF_41CD_C38CACD373C8); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.63,
   "image": "this.AnimatedImageResource_5657371E_4284_4547_41AD_C2735CDE790B",
   "pitch": -22.57,
   "yaw": 128.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53B66F6E_4284_45C7_41C6_66DDAE5C6FEE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.63,
   "yaw": 128.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C, this.camera_631AB4BE_4717_3A95_41C0_F2B20441C284); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.71,
   "image": "this.AnimatedImageResource_55CB4B40_4717_2FED_41C4_F4B24891BABE",
   "pitch": -21.63,
   "yaw": 141.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A8E1599_2C63_D419_41BF_FFAC0E975CED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 141.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.63
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA, this.camera_630AB4D6_4717_3A95_41C7_E4DB1B077FB4); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.3,
   "image": "this.AnimatedImageResource_51B2C013_4283_DB5D_41C3_C26904AD80BC",
   "pitch": -12.37,
   "yaw": -162.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_569AE1E5_4284_5CC5_419D_C441EE6FEDFF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.3,
   "yaw": -162.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C, this.camera_63F7341C_4717_3995_41C2_B0195AF33D4A); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_265A2F14_3789_8138_41B2_77B914EABAA5",
   "pitch": -23.14,
   "yaw": 13.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37683645_2939_C03C_41C2_BF1F1F25B02F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.58,
   "yaw": 13.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.14
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59, this.camera_64088414_4717_3995_41A3_95430D3A44BA); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.89,
   "image": "this.AnimatedImageResource_56494726_4284_4547_41C2_4348B0C70A48",
   "pitch": -19.17,
   "yaw": -174.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52AEB85F_4283_CBC6_41C2_72AA1C8FC826",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.89,
   "yaw": -174.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211, this.camera_666ED246_4717_39F5_41A2_A5A1BF082B29); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.01,
   "image": "this.AnimatedImageResource_26618F1E_3789_8128_41C8_384F7D09CB1A",
   "pitch": -17.47,
   "yaw": -21.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DE2B19F_2978_404D_41A8_6FFE962AC596",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.01,
   "yaw": -21.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.47
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB43E82_2949_C037_419E_721673465960_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99, this.camera_6666C23D_4717_3997_41BC_87ECB3DFC785); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.01,
   "image": "this.AnimatedImageResource_5642D72F_4284_4545_41B6_A1CB660AA9F3",
   "pitch": -17.47,
   "yaw": 155.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52E7166B_428C_47CE_416C_6C3AB4CB42EB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.01,
   "yaw": 155.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D, this.camera_63B33438_4717_399D_4167_F96211F9011E); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.16,
   "image": "this.AnimatedImageResource_2650FF09_3789_8128_4198_A89079E235E8",
   "pitch": -15.02,
   "yaw": -15.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_002E02DA_29D9_C1D7_4190_8DF7F7DCF605",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.16,
   "yaw": -15.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.02
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBAF629_2948_4075_418B_5B811352E2F1_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119, this.camera_63C34431_4717_39AF_41C7_FD3D5C7FAF07); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.31,
   "image": "this.AnimatedImageResource_56517722_4284_457E_41C1_6598E52AE655",
   "pitch": -12.18,
   "yaw": 166.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52C61905_4284_CD3A_41CD_7C1C6042564C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.31,
   "yaw": 166.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.18
  }
 ]
},
{
 "width": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": 30,
 "minWidth": 1,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "maxHeight": 37,
 "bottom": 8,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7, this.camera_66959201_4717_396F_41C0_B9DE0B6EC224); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_5659D719_4284_454A_41C2_E06589E9D384",
   "pitch": -12.42,
   "yaw": -55.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_295313C1_2736_083A_41C3_5B267BEACC58",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -55.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0, this.camera_66AF81F8_4717_3A9D_41B3_832999B8D145); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.36,
   "image": "this.AnimatedImageResource_26490EFD_3789_80E8_41B5_7995F74F6EB2",
   "pitch": -25.59,
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29EBB35C_2738_40D3_4186_4656CF695A5E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.36,
   "yaw": -9.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.59
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4, this.camera_669C7209_4717_397F_41BC_021C014FA00C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_56588719_4284_454A_41B5_D9C779EC434F",
   "pitch": -13.13,
   "yaw": 149.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52FABA70_4284_4FDB_41CC_D441A4F77AF9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 149.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C52509F_294B_C04D_4184_C839697DC89E, this.camera_63A14440_4717_39ED_41CD_EC9F0765A97C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.66,
   "image": "this.AnimatedImageResource_2654AF02_3789_8119_41A3_2D5806C6B43E",
   "pitch": -22.19,
   "yaw": -16.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06BE9617_29C8_C05D_41B3_DF9E5E6F7829",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.66,
   "yaw": -16.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.19
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659, this.camera_6391E449_4717_39FF_41C3_7BFBE2DCE27C); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_5654271F_4284_4545_4178_D66C72087367",
   "pitch": -13.13,
   "yaw": 162.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D6B0935_4284_4D45_417B_90B754486661",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 162.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388D4B46_2BE4_5C73_41BA_F9340F45CDDE_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76, this.camera_63D50429_4717_39BF_41B5_040771A39856); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_266D4F22_3789_8119_41CA_594FCF34840B",
   "pitch": -14.26,
   "yaw": 173.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_23AD52E0_36EB_D43B_41C6_6D888F32F03B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 173.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.26
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06, this.camera_63E50423_4717_39B3_41B1_3C1223C18F85); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.39,
   "image": "this.AnimatedImageResource_55DD5B39_4717_2F9F_41D0_26290AF101F1",
   "pitch": -25.22,
   "yaw": -4.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56E9E36B_428C_3DCD_41C8_EC549E4F2A66",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.39,
   "yaw": -4.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA, this.camera_623E15A7_4717_3AB3_41C0_A3D42AF8FFCF); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.15,
   "image": "this.AnimatedImageResource_258F9F4C_3789_8129_41C1_586AE601CF65",
   "pitch": -15.2,
   "yaw": -21.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C6619E9_2BE5_BC30_41B2_81318A06E934",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.15,
   "yaw": -21.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.2
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A, this.camera_622D85AF_4717_3AB3_419A_040775C9C1D2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_51B7E01B_4283_DB4D_41CA_D5B94183199D",
   "pitch": -8.59,
   "yaw": 146.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_516AF142_429D_DD3F_41BC_D2D13F5C1436",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.45,
   "yaw": 146.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077, this.camera_661CF29C_4717_3E95_41C8_67FA8BD04928); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.53,
   "image": "this.AnimatedImageResource_5435EB44_4717_2FF5_41C4_051CF2FF2FBB",
   "pitch": -5.57,
   "yaw": -8.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30FB19EA_2BE4_7C37_41C4_0AFF901A0223",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.53,
   "yaw": -8.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.57
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0, this.camera_6607A2A4_4717_3EB6_41C4_E0EF92AEAF8D); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.39,
   "image": "this.AnimatedImageResource_51B14018_4283_DB4B_41A4_ABD2BC447E63",
   "pitch": -10.29,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5675AD6A_429C_45CF_41A3_977509FA25DB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.39,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0, this.camera_649693C2_4717_3EED_41C6_493F491C0790); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.4,
   "image": "this.AnimatedImageResource_56468727_4284_4545_41BA_5C984A65938C",
   "pitch": -9.92,
   "yaw": -20.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3218299D_295B_C04D_41B9_5342D5E8D06B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.4,
   "yaw": -20.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.92
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C5D0926_2948_407F_41AD_366AF91FB872_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD, this.camera_64A8F3BB_4717_3E93_41D0_B86337AEE286); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.12,
   "image": "this.AnimatedImageResource_56461727_4284_4545_41CF_1105449CC9BD",
   "pitch": -15.77,
   "yaw": 157.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_539F8FA5_428C_4545_41C4_C1890E2A6E75",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.12,
   "yaw": 157.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592, this.camera_608770EC_4717_3AB5_41C4_B6FFA514D197); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_26594F11_3789_813B_41B3_214C01EA0E68",
   "pitch": -12.94,
   "yaw": 23.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_087BA3D1_2938_C7D5_41B4_CB129A114A58",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.27,
   "yaw": 23.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.94
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB, this.camera_609BB0E3_4717_3AB3_41C8_E3F7C7A0A877); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.32,
   "image": "this.AnimatedImageResource_564A4725_4284_4545_41CA_A018E0EB3D49",
   "pitch": -11.99,
   "yaw": -166.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52194183_4284_5D3E_41B6_BCB19DDAAC56",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.32,
   "yaw": -166.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142, this.camera_641AB40C_4717_3976_41D0_6AAE6DD2AD9D); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_26699F2A_3789_8168_41A6_1FB8055AD573",
   "pitch": -9.54,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1E39ECAE_2CAC_74FA_41B6_4B7280F3F7CC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0, this.camera_642D3404_4717_3975_41B2_0050DCC3D3BE); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.88,
   "image": "this.AnimatedImageResource_504DC00E_4283_DB47_41C2_651A5F23638E",
   "pitch": -19.36,
   "yaw": 161.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50572336_4287_DD47_41B6_A2141D3C380E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 161.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF, this.camera_654E234D_4717_3FF7_41C3_C229CE312926); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.34,
   "image": "this.AnimatedImageResource_504CF00F_4283_DB45_41D0_458CBEC1366E",
   "pitch": -11.43,
   "yaw": -8.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0235E8DE_2CA4_5C4C_41BD_E886100EC294",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.34,
   "yaw": -8.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.43
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38, this.camera_65427344_4717_3FF5_41CD_24ADA2CCD535); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.37,
   "image": "this.AnimatedImageResource_504CC010_4283_DB5B_4196_9017DFB0847E",
   "pitch": -10.67,
   "yaw": 161.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51FDA45C_428C_7BCA_4174_1984822B7568",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.37,
   "yaw": 161.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668, this.camera_633B1496_4717_3A95_41C3_D8F4C46373E0); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.56,
   "image": "this.AnimatedImageResource_2668BF2B_3789_8168_41C2_7666AC733AA2",
   "pitch": -4.25,
   "yaw": -26.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1CF2C143_2CA3_CDAF_419E_2D09E0727703",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.56,
   "yaw": -26.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.25
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF, this.camera_632B34A9_4717_3ABF_4187_BE05F64FA6AC); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.74,
   "image": "this.AnimatedImageResource_504D600F_4283_DB45_41AA_356C9C9725C4",
   "pitch": -21.25,
   "yaw": 149.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_504FAA88_4284_4F4B_41C6_24B66416F6CA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.74,
   "yaw": 149.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739, this.camera_643F23FC_4717_3E95_41C9_C48B1F758679); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.57,
   "image": "this.AnimatedImageResource_266C3F27_3789_8118_41C6_ABAF1C217A73",
   "pitch": -3.49,
   "yaw": -9.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_247C1C7B_36D8_EC01_41B1_7B1C075EF07F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.57,
   "yaw": -9.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.49
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06, this.camera_6433B3F4_4717_3E95_41B7_16E81AA916CE); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.53,
   "image": "this.AnimatedImageResource_55C0BB3A_4717_2F9D_41D1_AE74990905BF",
   "pitch": -23.7,
   "yaw": 168.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56D2E41B_428C_5B4D_419E_F6F8E90F70EA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.53,
   "yaw": 168.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4, this.camera_60E7C0A3_4717_3AB2_4197_C90F60CE8640); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.02,
   "image": "this.AnimatedImageResource_265D6F0D_3789_812B_4196_8085F6FA02ED",
   "pitch": -17.28,
   "yaw": -19.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EF18104_29C8_4033_4179_A83188263305",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.02,
   "yaw": -19.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C538239_2948_C055_41B2_378D20A97BBA_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB99717_2948_C05C_41C2_9081E5372DE9, this.camera_60FC609A_4717_3A9D_418B_997F88AB3FF3); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_564D8724_4284_457A_41CC_C7D9947608CA",
   "pitch": -4.44,
   "yaw": 117.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52165848_4284_4BCB_41CA_5CB60752320F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.55,
   "yaw": 117.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7, this.camera_6628E286_4717_3975_41CB_A0AA45CE7635); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_5644972D_4284_454A_41C1_90B3ED267176",
   "pitch": -12.94,
   "yaw": -12.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30FA7393_2948_C055_41B2_4F1BDC33CC82",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -12.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.94
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0, this.camera_66124293_4717_3E93_41C1_E177434A0AEA); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.32,
   "image": "this.AnimatedImageResource_5644672D_4284_454A_41C0_4EB81792CE6D",
   "pitch": -11.99,
   "yaw": 148.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_523964BF_428C_3B46_414F_97AAD7C37CDF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.32,
   "yaw": 148.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8, this.camera_651A0372_4717_3FAD_419C_D5E0F59FBBF7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_26484EFE_3789_80E8_41C9_08730D0486C3",
   "pitch": -13.32,
   "yaw": -69.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_304FACCF_2176_5BE7_41B5_D0A26F0BEFE8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.25,
   "yaw": -69.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.32
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B219D6_1DFA_F262_41B3_F285ED30573B, this.camera_652E7368_4717_3FBD_4183_B1A08C198A22); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.95,
   "image": "this.AnimatedImageResource_5658771E_4284_4547_41C2_CA7790A1DE11",
   "pitch": -18.42,
   "yaw": 84.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5314F0DB_4284_DCCD_41AC_B817CD2D8A0E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.95,
   "yaw": 84.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E, this.camera_606420FE_4717_3A95_41AE_56BEB8E1D473); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.33,
   "image": "this.AnimatedImageResource_51B05017_4283_DB45_41C0_901C181444AB",
   "pitch": -11.62,
   "yaw": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36D7B941_2BE4_7C75_41A5_3BAA2A10A559",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.33,
   "yaw": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38800178_2BE5_CC1F_41B8_04260E2988D5, this.camera_6075A0F4_4717_3A95_41A1_FBEE4AAEA0E5); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.1,
   "image": "this.AnimatedImageResource_51B1A018_4283_DB4B_41CC_7544E0F8E18C",
   "pitch": -11.62,
   "yaw": 170.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_514C57E7_429D_C4C5_41A3_F891E109B231",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.1,
   "yaw": 170.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99, this.camera_647C43D7_4717_3E93_41D0_DD7292A5CC83); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.87,
   "image": "this.AnimatedImageResource_5643972E_4284_4546_41A2_2D185B390553",
   "pitch": -19.55,
   "yaw": -27.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FC99F80_2978_4033_41B7_5ADCFF120E0D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.87,
   "yaw": -27.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.55
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6, this.camera_646A03DF_4717_3E93_4194_3A8701EBF62C); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.43,
   "image": "this.AnimatedImageResource_5644C72E_4284_4546_41CE_9C44377612FC",
   "pitch": -24.84,
   "yaw": 173.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53A96A22_428F_CF7F_41C4_CC8346901B06",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.43,
   "yaw": 173.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592, this.camera_6582D30F_4717_3F73_41CF_FC104EF5598D); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "image": "this.AnimatedImageResource_266EAF21_3789_811B_4166_27AF096848F3",
   "pitch": -19.74,
   "yaw": 42.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_208718A4_36E9_543F_41A2_7647E7BAEAC6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 42.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.74
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E, this.camera_658B6318_4717_3F9D_41CC_1C638CDB8BBB); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.88,
   "image": "this.AnimatedImageResource_55DC4B39_4717_2F9F_41AC_A7FB5C6DCB32",
   "pitch": -19.36,
   "yaw": 171.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5627253A_4283_C54F_41CC_A2A1BBB081D6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.88,
   "yaw": 171.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A, this.camera_64F07385_4717_3F77_417C_73B359E36AD4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.04,
   "image": "this.AnimatedImageResource_56522720_4284_457B_419C_8D160E0944D5",
   "pitch": -17.09,
   "yaw": -20.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0300BDBD_29D8_C04C_41AA_FFDDC7CEB370",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.04,
   "yaw": -20.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.09
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB69578_2948_40D3_418F_97DE00A915B6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6, this.camera_6506137C_4717_3F95_41A7_5E44FCB89A5A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.51,
   "image": "this.AnimatedImageResource_5653D720_4284_457B_4188_211333A88292",
   "pitch": -6.52,
   "yaw": 159.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5386668D_4285_C74A_41B8_022BA6DBA888",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.51,
   "yaw": 159.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB, this.camera_65F0C2AE_4717_3EB5_41C7_27182D6A7689); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.51,
   "image": "this.AnimatedImageResource_2671FF36_3789_8178_41CA_C0011636F56D",
   "pitch": -23.89,
   "yaw": -171.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0021320E_2C5C_CFDC_41BF_82657FB46DBC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.51,
   "yaw": -171.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.89
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72, this.camera_65FB82B7_4717_3E93_41B3_BCA2748A5F4A); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.54,
   "image": "this.AnimatedImageResource_51B3C011_4283_DB5D_41AE_6F708CA97788",
   "pitch": -5.38,
   "yaw": 150.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5626A087_428C_5B45_41A9_DB43DE32C1C9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.54,
   "yaw": 150.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561, this.camera_62C6C521_4717_3BAF_41C0_75BE9121E545); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_51B0B017_4283_DB45_41C7_6ADEF20AFFE7",
   "pitch": -9.54,
   "yaw": -21.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35559853_2BEC_5C14_41B2_9B6A03417CCC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": -21.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077, this.camera_62D8950E_4717_3B75_41C8_CCBBA0E16E36); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "image": "this.AnimatedImageResource_51B07017_4283_DB45_41CA_316C0E73A957",
   "pitch": -19.74,
   "yaw": 161.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5178946C_429C_DBCB_41BF_6E255CF6192D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 161.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40, this.camera_65EF32C9_4717_3EFF_41CA_6D7859EF6C8B); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_266DCF24_3789_8119_41A7_68DD90700A30",
   "pitch": -6.89,
   "yaw": 161.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24A264CE_36DB_5C03_41B2_C6A76B8A3103",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 161.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E, this.camera_65E422C0_4717_3EED_41D0_070EF6A438D9); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.5,
   "image": "this.AnimatedImageResource_266D6F25_3789_811B_4192_A215CA64C9A6",
   "pitch": 6.89,
   "yaw": 100.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_254E3804_36E9_7406_41B7_DDFAE7165CBF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 100.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.89
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38F8E63D_2BE4_F416_41BF_924667D66142, this.camera_65DAC2D1_4717_3EEF_4184_30F3436AF99D); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.59,
   "image": "this.AnimatedImageResource_55DFFB3A_4717_2F9D_41C7_30A02704B43E",
   "pitch": -0.09,
   "yaw": -79.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56906475_428D_DBC5_41AE_2D67BBBFA9A6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.59,
   "yaw": -79.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD, this.camera_637E445E_4717_3995_41B4_BE5BF760E5D3); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.11,
   "image": "this.AnimatedImageResource_56489726_4284_4547_41C8_1D9F32106209",
   "pitch": -15.96,
   "yaw": 9.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3609A29F_2939_C04C_4194_1AE23BBA2749",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.11,
   "yaw": 9.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.96
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592, this.camera_636D9466_4717_39B5_41D0_FAC2F6FE05C5); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.35,
   "image": "this.AnimatedImageResource_56484726_4284_4547_41CE_F36C6D41E59F",
   "pitch": -11.24,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_539BFD11_428C_455C_41C2_0F32C8A9757A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.35,
   "yaw": -175.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723, this.camera_60B790C8_4717_3AFD_41C5_7D8C727E8B80); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.91,
   "image": "this.AnimatedImageResource_26551F01_3789_811B_41C9_117F8A965B14",
   "pitch": -18.98,
   "yaw": -20.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_066E1F3A_29CB_C054_4195_B776510DF2B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.91,
   "yaw": -20.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.98
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A, this.camera_60CCE0BF_4717_3A93_41C1_E8A5F0ED12BE); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "image": "this.AnimatedImageResource_5655771F_4284_4545_41CC_8724C1744A53",
   "pitch": -23.14,
   "yaw": 150.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52F3D39D_4283_FD4A_41CB_7F2964EA2403",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.58,
   "yaw": 150.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB43E82_2949_C037_419E_721673465960, this.camera_66A991EF_4717_3AB3_4194_F8533EEA4628); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.27,
   "image": "this.AnimatedImageResource_5644472E_4284_4546_41C0_77AEC7839BF7",
   "pitch": -12.94,
   "yaw": -18.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F7A238E_2978_C04F_41B5_675DAFAE3BAF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.27,
   "yaw": -18.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.94
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7, this.camera_66A461E6_4717_3AB5_4193_FFC854BDEE78); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.37,
   "image": "this.AnimatedImageResource_5643D72F_4284_4545_41C9_CB4080C182F1",
   "pitch": -10.86,
   "yaw": 165.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53BCBFD4_428C_C4DB_41BB_0301D39B07FA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.37,
   "yaw": 165.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.86
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659, this.camera_61EBF5CB_4717_3AF3_41C1_8A197383CAA4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "image": "this.AnimatedImageResource_591157A4_4719_26B5_41B3_6E66FE6290DB",
   "pitch": -21.06,
   "yaw": -14.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D176875_429C_CBDA_419A_9C7FF0732B99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.75,
   "yaw": -14.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0_HS_3_0.png",
      "width": 600,
      "class": "ImageResourceLevel",
      "height": 450
     }
    ]
   },
   "pitch": 15.12,
   "yaw": -16.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_5E55B194_470B_5A95_41B3_BA15A53C6314",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 36.2,
   "yaw": -16.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147, this.camera_61C9F5DA_4717_3A9D_41CC_5C47CE214751); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.34,
   "image": "this.AnimatedImageResource_26710F37_3789_8178_41CA_856F886A936B",
   "pitch": -11.43,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_075136C2_2C6C_545E_41C5_64E31BD4B41D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.34,
   "yaw": -19.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.43
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C, this.camera_61D9C5D3_4717_3A93_41BA_EA4D040974CA); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.53,
   "image": "this.AnimatedImageResource_51B37012_4283_DB5F_41C0_972B4EE66732",
   "pitch": -23.7,
   "yaw": 161.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5188F598_428C_C54B_41CE_679C10814B8C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.53,
   "yaw": 161.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE, this.camera_6122806E_4717_39B5_41B8_2ABC38AF9B47); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "image": "this.AnimatedImageResource_26502F0A_3789_8128_41C8_5ED06CEC2E2C",
   "pitch": -21.06,
   "yaw": 15.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FB4432A_29C7_C077_4156_9F278AB9A68D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.75,
   "yaw": 15.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.06
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1, this.camera_61372065_4717_39B7_41C2_2F8D7834CCD9); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_56503723_4284_457E_41CB_D016AAE02446",
   "pitch": -13.13,
   "yaw": -169.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52C2B743_4284_453E_41BA_9DC8C4BE5454",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": -169.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4, this.camera_65619329_4717_3FBF_41CF_C14A7E8BAB95); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.47,
   "image": "this.AnimatedImageResource_565B5718_4284_454A_41C5_52A8905C506E",
   "pitch": -6.83,
   "yaw": 13.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_373A1C16_2732_1846_41C3_546BF115BA20",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.47,
   "yaw": 13.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.83
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A, this.camera_65779320_4717_3FAD_41CB_70800DFD3AE4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_565AC718_4284_454A_41A2_C41CD63A4EB3",
   "pitch": -13.13,
   "yaw": -161.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5398FCCA_4284_44CE_41C1_4C5F1C6784BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": -161.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517, this.camera_6678C22B_4717_39B3_41CF_6150CD9C04EB); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.25,
   "image": "this.AnimatedImageResource_267EEF3C_3789_8168_41C9_FC657D3F60AA",
   "pitch": -13.32,
   "yaw": -31.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_082003E0_2C64_4C32_41C1_98F77810E7F8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.25,
   "yaw": -31.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.32
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC, this.camera_6660F234_4717_3995_41C5_F9BC9210F540); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.25,
   "image": "this.AnimatedImageResource_51B25013_4283_DB5D_41B0_1991EC308C3B",
   "pitch": -26.73,
   "yaw": 171.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_513F0873_4284_CBDD_41AC_4C61211116D6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.25,
   "yaw": 171.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB69578_2948_40D3_418F_97DE00A915B6, this.camera_60F0E091_4717_396F_41A0_8A8A19C816BF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.34,
   "image": "this.AnimatedImageResource_2652EF04_3789_8119_4196_7612D9565B75",
   "pitch": -11.43,
   "yaw": -15.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04C3C7D1_29D8_CFD5_41C2_BED31DE6C8CC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.34,
   "yaw": -15.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.43
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C52509F_294B_C04D_4184_C839697DC89E, this.camera_6104F088_4717_397D_41B0_2789549FCD98); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.29,
   "image": "this.AnimatedImageResource_56529720_4284_457B_41AB_1D6CFF956DCD",
   "pitch": -12.56,
   "yaw": 159.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_522EEF1C_4284_C54B_41A8_36F6324A919F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 159.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33, this.camera_6470C3D0_4717_3EED_41B8_EE7D104F9D8A); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.07,
   "image": "this.AnimatedImageResource_54380B46_4717_2FF5_41C7_F117A9A7D931",
   "pitch": -28.43,
   "yaw": 21.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32C3CC91_2BE4_F413_4190_10866D6F4D81",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.07,
   "yaw": 21.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.43
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC, this.camera_6482E3CA_4717_3EFD_41BA_FD2F1303FE6B); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.38,
   "image": "this.AnimatedImageResource_51B0301B_4283_DB4D_41C5_9CD15F1C7BAA",
   "pitch": -10.48,
   "yaw": -172.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51786D29_429C_C54D_41AE_943357EB9CD5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.38,
   "yaw": -172.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C538239_2948_C055_41B2_378D20A97BBA, this.camera_64FC038D_4717_3F77_41CE_C62035D3DFAA); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.06,
   "image": "this.AnimatedImageResource_564F6723_4284_457E_41CE_9988F3DDCA0E",
   "pitch": -16.72,
   "yaw": -8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D58CF85_29C8_C03D_41B4_3AAC4D7DA15C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.06,
   "yaw": -8.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.72
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE, this.camera_64E64395_4717_3E97_41A2_4A4B0C66F986); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.44,
   "image": "this.AnimatedImageResource_564EC724_4284_457A_41C7_E65E99B90C74",
   "pitch": -8.78,
   "yaw": 151.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_525E54F4_4284_44DA_41C7_BBEC68206B21",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.44,
   "yaw": 151.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC, this.camera_6262C58B_4717_3B73_419E_9A12A93CBEF9); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.46,
   "image": "this.AnimatedImageResource_55CFAB42_4717_2FED_41CD_4F02DBA9CA48",
   "pitch": -8.41,
   "yaw": 4.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F614F13_2C7C_5414_4183_06EB64FC32E5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.46,
   "yaw": 4.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.41
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02, this.camera_6272357F_4717_3B93_41BD_14CB64D7EC03); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.43,
   "image": "this.AnimatedImageResource_51B19014_4283_DB5B_41C4_FBB460488F9D",
   "pitch": -9.16,
   "yaw": -126.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56E061BA_4285_DD4F_41C9_A3963F5E935C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.43,
   "yaw": -126.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB, this.camera_64CEB3AD_4717_3EB7_41C0_2BE4C83EADEB); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.18,
   "image": "this.AnimatedImageResource_265B4F0F_3789_8127_417C_506DBF6B78D8",
   "pitch": -14.64,
   "yaw": -21.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B82A834_29C8_4053_41A3_87EED0B898E5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.18,
   "yaw": -21.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.64
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C569846_2948_C03F_41AB_E2214544461A_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4, this.camera_64BB53B3_4717_3E93_41AA_CF3469478191); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.42,
   "image": "this.AnimatedImageResource_564C5725_4284_4545_4195_BEB5706C9A98",
   "pitch": -9.54,
   "yaw": 169.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_523F2D51_4285_C5DD_41B2_1876375DD5AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.42,
   "yaw": 169.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38, this.camera_66826211_4717_396F_41C2_C078663A0261); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.08,
   "image": "this.AnimatedImageResource_504C5010_4283_DB5B_4192_68E287466AF0",
   "pitch": -16.34,
   "yaw": 11.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0278D927_2C5C_BDC1_41C4_121D02D5C398",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.08,
   "yaw": 11.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.34
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147, this.camera_668AC21A_4717_399D_41C1_312C65D8EBF9); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.17,
   "image": "this.AnimatedImageResource_504C1011_4283_DB5D_41D0_616D7038271A",
   "pitch": -14.83,
   "yaw": 160.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5145B78B_428C_C54D_41C0_811BB291CC16",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.17,
   "yaw": 160.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6, this.camera_62A47548_4717_3BFD_4197_19C4D1708B6E); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.11,
   "image": "this.AnimatedImageResource_2665CF18_3789_8129_41C3_78806E47CC69",
   "pitch": -15.96,
   "yaw": -20.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31F27549_2958_4035_41AB_7E7B7D0B909A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.11,
   "yaw": -20.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.96
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872, this.camera_62B63535_4717_3B97_41B6_042E35CEA3CD); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.19,
   "image": "this.AnimatedImageResource_5645172D_4284_454A_41CE_588FEFD621D8",
   "pitch": -14.45,
   "yaw": 164.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52A3ADB9_428C_454D_41C0_10E6ED83A386",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.19,
   "yaw": 164.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBAF629_2948_4075_418B_5B811352E2F1, this.camera_6654224E_4717_39F5_41C4_58E8BF6D0C24); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.72,
   "image": "this.AnimatedImageResource_2651FF08_3789_8128_41A9_5C92D612708D",
   "pitch": -21.44,
   "yaw": -23.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02C75436_29D8_405F_4162_5D88E6E5DAD7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -23.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.44
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A, this.camera_665CE257_4717_3993_41CF_29BA4FD19428); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "image": "this.AnimatedImageResource_5651A722_4284_457E_41CD_628F284AB709",
   "pitch": -21.06,
   "yaw": 71.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52F1A955_4284_CDDA_4194_AEC44337F268",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.75,
   "yaw": 71.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72, this.camera_6556533C_4717_3F95_41C5_5418DFE81D33); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.33,
   "image": "this.AnimatedImageResource_267FCF39_3789_8168_41C1_029D8EE701D6",
   "pitch": -11.62,
   "yaw": -16.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06B00E57_2C6C_D46B_41BB_93EF09F983F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.33,
   "yaw": -16.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517, this.camera_656C4333_4717_3F93_41BE_B7EC0558EC3B); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.02,
   "image": "this.AnimatedImageResource_51B31012_4283_DB5F_41CE_A4D15D5FEB99",
   "pitch": -17.28,
   "yaw": 153.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_51F6D1B4_428C_5D5B_41BF_0962B210FA93",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 153.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A, this.camera_65B8E2EB_4717_3EB2_41D1_DA3D86DE846C); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.4,
   "image": "this.AnimatedImageResource_26608F1F_3789_8128_41A2_B54236D46E65",
   "pitch": -9.92,
   "yaw": -21.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D40719E_2948_404F_41C2_D94FFC6CDECE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.4,
   "yaw": -21.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.92
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BB43E82_2949_C037_419E_721673465960, this.camera_65A392F4_4717_3E95_41B2_FD1F695978C6); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.3,
   "image": "this.AnimatedImageResource_5641E72F_4284_4545_41C9_26244F5A026B",
   "pitch": -12.37,
   "yaw": 148.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_527DE2D8_428D_FCCB_41B0_B00ACCD62E36",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.3,
   "yaw": 148.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C5D0926_2948_407F_41AD_366AF91FB872, this.camera_6634A270_4717_39AD_41D1_E76D27AF8135); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "image": "this.AnimatedImageResource_2667CF16_3789_8138_41B9_AF45EDA3B4B5",
   "pitch": -19.93,
   "yaw": -30.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33F11515_2958_C05C_41BC_475006ECF7B3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.84,
   "yaw": -30.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.93
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C, this.camera_663DC279_4717_399F_41AB_96AF500A79EC); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.64,
   "image": "this.AnimatedImageResource_56477727_4284_4545_41C9_FAD05F5FA717",
   "pitch": -22.38,
   "yaw": 154.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52E6E072_428C_3BDE_41C8_DEC1E9571436",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.64,
   "yaw": 154.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0, this.camera_60DF30B6_4717_3A95_41BE_5B59AFD8616E); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.23,
   "image": "this.AnimatedImageResource_54377B45_4717_2FF7_41D0_7BAA4E12EB42",
   "pitch": -13.69,
   "yaw": -45.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_332615E4_2BFC_5432_41BC_DE5083E9EF36",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -45.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.69
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "distance": 50,
 "hfov": 60,
 "id": "panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_tcap0",
 "class": "TripodCapPanoramaOverlay",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_2763DC32_2BA3_B428_41A3_9E0DC28C586E_tcap0.jpg",
    "width": 1705,
    "class": "ImageResourceLevel",
    "height": 1705
   }
  ]
 },
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA, this.camera_60D4A0AC_4717_3AB5_41B4_A52E85EEC68D); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.37,
   "image": "this.AnimatedImageResource_5438DB45_4717_2FF7_41C4_4DA13EA6EB62",
   "pitch": -10.67,
   "yaw": 158.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56CB5CA6_429F_CB47_41A8_7F3B48BA1339",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.37,
   "yaw": 158.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.67
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "layout": "horizontal",
 "width": 110,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 110,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "height": "85.959%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "text 1"
 },
 "left": 0,
 "width": 567.5,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": "DESA DUWET KRAJAN",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "top": 5,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 86,
 "fontSize": 90,
 "textShadowHorizontalLength": 0,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "fontFamily": "Bebas Neue Book",
 "data": {
  "name": "text 2"
 },
 "left": 0,
 "width": 388,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": "MMD FILKOM UB 2025",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "bottom": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 46,
 "fontSize": 41,
 "textShadowHorizontalLength": 0,
 "paddingTop": 0,
 "class": "Label",
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minWidth": 1,
 "maxWidth": 3000,
 "maxHeight": 2,
 "bottom": 53,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 2,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": true,
 "data": {
  "name": "white line"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98"
 ],
 "layout": "horizontal",
 "left": "0%",
 "width": 1199,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 30,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": 51,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "layout": "horizontal",
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "layout": "vertical",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "layout": "vertical",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "15%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "7%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "layout": "horizontal",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "right": "10%",
 "borderSize": 0,
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "bottom": "5%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "5%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "layout": "vertical",
 "left": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "10%",
 "minWidth": 1,
 "bottom": "80%",
 "contentOpaque": false,
 "paddingRight": 20,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "top": "5%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38F84F14_2BE4_D417_41AA_52EE7AE74739_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55C03B3B_4717_2F93_4192_42AF463B7961",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_265F0F0B_3789_812F_41BD_E4A35D95A06B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C5E2C6D_2948_40CD_41AC_02899AC633DE_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564FC723_4284_457E_41BE_00C741A65B67",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_565BB716_4284_4547_41B6_A044D6018717",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_11D27FBB_1DFD_2E2C_419C_910EBF70215A_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_565BC718_4284_454A_41C7_6B89F38059E1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_564B2725_4284_4545_41A1_154403704D94",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBAF2C1_2948_C035_41A9_77D5C2369FCB_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564AA725_4284_4545_415E_82C49085FB06",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_54309B42_4717_2FED_41C4_DA0199DBAD5C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38FA528D_2BE5_CCF1_41BA_E9BC8AE65B02_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B13016_4283_DB47_41B6_E0A7B2FE9837",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3F64521E_2BE4_4C13_41A8_7F02EA086592_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55DB6B38_4717_2F9E_41B6_6D75D68DB0DA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266A7F29_3789_8168_41AD_321178B82648",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38F8E63D_2BE4_F416_41BF_924667D66142_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504E100D_4283_DB45_41BE_A08DFD1B795C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26774F2C_3789_8169_41C6_1577541675E9",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_388E3CFC_2BE4_D417_41B6_CEEE1720ECAF_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504D200F_4283_DB45_41CE_52F16A7926B0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26528F07_3789_8118_419B_51C231D49456",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB7306A_2948_40F7_41C2_D2197BBE614A_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56529722_4284_457E_4165_83B675D75314",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B283E8_1DFB_362C_4188_225A7BC1EBC9_0_HS_1_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5656A71E_4284_4547_41CB_13894AEC1A9D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_55CEEB41_4717_2FEF_415F_38F53E079672",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DC326F_2BE4_4C31_41C5_5F5AA28853FC_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B20014_4283_DB5B_41C5_CA7C6DD2DE8F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5654471F_4284_4545_41B6_77AA84BA7CB0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C52509F_294B_C04D_4184_C839697DC89E_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5653D720_4284_457B_41C4_6A93FB9D3564",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_25844F47_3789_8127_41C2_3D428ACB3267",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3887897F_2BE5_DC12_41B0_784AABFE12A0_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B0E01A_4283_DB4E_41BA_8938A046BC96",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16B70CFC_1DFB_3224_41A9_BB3A3E0139E0_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26567F00_3789_8119_41CB_C21710DAA853",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_51B11016_4283_DB47_41C5_B9C9E23EADDC",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38F88A11_2BE5_DFEE_4194_8DC8EC820561_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B0D016_4283_DB47_41BF_359EBBFC3FC4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388D1975_2BE4_5C16_41A4_8C1F23A2793A_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_264CEEF7_3789_80E7_4185_4C5A146BF77A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2674CF31_3789_817B_41C5_73995DE5218D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DC5C15_2BE4_B416_41B9_55A2C32B9D38_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504C7010_4283_DB5B_41C4_BB701492208F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_265C6F0E_3789_8129_41B2_71849DC43ED4",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBEBD23_2948_C074_41B1_8C61B6DC01B4_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564CA724_4284_457A_41C4_E1DEAC78FDFB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_565A1718_4284_454A_41C6_817ACED8BF67",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16DA6110_1DFA_F3FD_41B9_4F1DACC133D4_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5659B718_4284_454A_41CA_36BB53CED426",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26578EFF_3789_80E8_41A2_9730C9D24A7E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B7FB0E_1DFA_D7E5_41B7_AACBF1EFF3A8_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5657371E_4284_4547_41AD_C2735CDE790B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_55CB4B40_4717_2FED_41C4_F4B24891BABE",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_388DF30E_2BE4_4DF2_41B4_E0689404A517_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B2C013_4283_DB5D_41C3_C26904AD80BC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_265A2F14_3789_8138_41B2_77B914EABAA5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB808A8_2948_4074_41A2_AB6F85AF4592_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56494726_4284_4547_41C2_4348B0C70A48",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26618F1E_3789_8128_41C8_384F7D09CB1A",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB43E82_2949_C037_419E_721673465960_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5642D72F_4284_4545_41B6_A1CB660AA9F3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2650FF09_3789_8128_4198_A89079E235E8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBAF629_2948_4075_418B_5B811352E2F1_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56517722_4284_457E_41C1_6598E52AE655",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5659D719_4284_454A_41C2_E06589E9D384",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26490EFD_3789_80E8_41B5_7995F74F6EB2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B219D6_1DFA_F262_41B3_F285ED30573B_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56588719_4284_454A_41B5_D9C779EC434F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2654AF02_3789_8119_41A3_2D5806C6B43E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BADC672_294B_C0D4_41BA_51B9A0F0A723_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5654271F_4284_4545_4178_D66C72087367",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266D4F22_3789_8119_41CA_594FCF34840B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38FF797B_2BE4_BC12_4182_CE3E2BA82A8E_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55DD5B39_4717_2F9F_41D0_26290AF101F1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_258F9F4C_3789_8129_41C1_586AE601CF65",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DDD182_2BE4_4CF2_41B3_180D2A5A8FFC_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B7E01B_4283_DB4D_41CA_D5B94183199D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5435EB44_4717_2FF5_41C4_051CF2FF2FBB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38800178_2BE5_CC1F_41B8_04260E2988D5_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B14018_4283_DB4B_41A4_ABD2BC447E63",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_56468727_4284_4545_41BA_5C984A65938C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C5D0926_2948_407F_41AD_366AF91FB872_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56461727_4284_4545_41CF_1105449CC9BD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26594F11_3789_813B_41B3_214C01EA0E68",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB5ACD9_2948_C1D5_41C1_39ED4392EA59_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564A4725_4284_4545_41CA_A018E0EB3D49",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26699F2A_3789_8168_41A6_1FB8055AD573",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_388CDDB6_2BE4_F413_41C1_203BEC1D0668_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504DC00E_4283_DB47_41C2_651A5F23638E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_504CF00F_4283_DB45_41D0_458CBEC1366E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_388F1469_2BE4_B431_41C4_4E5A38F38F16_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504CC010_4283_DB5B_4196_9017DFB0847E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2668BF2B_3789_8168_41C2_7666AC733AA2",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3880A50B_2BE4_D5F1_41C4_B323DECDDDC0_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504D600F_4283_DB45_41AA_356C9C9725C4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266C3F27_3789_8118_41C6_ABAF1C217A73",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38FAC80A_2BE4_DBF3_41B2_A0CC0A47BF40_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55C0BB3A_4717_2F9D_41D1_AE74990905BF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_265D6F0D_3789_812B_4196_8085F6FA02ED",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C538239_2948_C055_41B2_378D20A97BBA_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564D8724_4284_457A_41CC_C7D9947608CA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5644972D_4284_454A_41C1_90B3ED267176",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB42E69_2948_40F5_41B1_3E9CF8242DA6_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5644672D_4284_454A_41C0_4EB81792CE6D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26484EFE_3789_80E8_41C9_08730D0486C3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6A24D_1DFA_D664_41AB_92755D1CD0D7_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5658771E_4284_4547_41C2_CA7790A1DE11",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_51B05017_4283_DB45_41C0_901C181444AB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3881397E_2BE5_FC12_41A0_7C8E983B6077_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B1A018_4283_DB4B_41CC_7544E0F8E18C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5643972E_4284_4546_41A2_2D185B390553",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C4708EE_2949_C1CF_41BA_C76D5C712CD7_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5644C72E_4284_4546_41CE_9C44377612FC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266EAF21_3789_811B_4166_27AF096848F3",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3884929B_2BE4_4C12_41AE_FD12DCFB3A76_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55DC4B39_4717_2F9F_41AC_A7FB5C6DCB32",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_56522720_4284_457B_419C_8D160E0944D5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB69578_2948_40D3_418F_97DE00A915B6_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5653D720_4284_457B_4188_211333A88292",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2671FF36_3789_8178_41CA_C0011636F56D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DCEB84_2BE4_5CF6_41B3_83182D536147_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B3C011_4283_DB5D_41AE_6F708CA97788",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_51B0B017_4283_DB45_41C7_6ADEF20AFFE7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38FA71BC_2BE5_CC17_4179_7C5B3C3B0D0E_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B07017_4283_DB45_41CA_316C0E73A957",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266DCF24_3789_8119_41A7_68DD90700A30",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_266D6F25_3789_811B_4192_A215CA64C9A6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38FF30DB_2BE4_CC12_41B1_C3F8493C2F06_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_55DFFB3A_4717_2F9D_41C7_30A02704B43E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_56489726_4284_4547_41C8_1D9F32106209",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBB1376_2948_40DF_41C3_C53AD3AB354C_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56484726_4284_4547_41CE_F36C6D41E59F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26551F01_3789_811B_41C9_117F8A965B14",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB4EC1E_294B_C04F_41C3_5E5679FFE659_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5655771F_4284_4545_41CC_8724C1744A53",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_5644472E_4284_4546_41C0_77AEC7839BF7",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C5DB3E5_2949_C7FD_41B9_CD5FEF386A99_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5643D72F_4284_4545_41C9_CB4080C182F1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C5512BC_294B_C053_41B0_F8DF130AB68A_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_591157A4_4719_26B5_41B3_6E66FE6290DB",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26710F37_3789_8178_41CA_856F886A936B",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DCF34A_2BE4_4C72_419F_9918A1A16D72_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B37012_4283_DB5F_41C0_972B4EE66732",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26502F0A_3789_8128_41C8_5ED06CEC2E2C",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBA0129_2948_4075_41C3_F56D2FCA9A2D_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56503723_4284_457E_41CB_D016AAE02446",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_565B5718_4284_454A_41C5_52A8905C506E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16CC088E_1DFA_D2E4_41AC_EB24027208E1_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_565AC718_4284_454A_41A2_C41CD63A4EB3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_267EEF3C_3789_8168_41C9_FC657D3F60AA",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38820A89_2BE4_5CF1_41C5_4E0F61FD24AA_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B25013_4283_DB5D_41B0_1991EC308C3B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2652EF04_3789_8119_4196_7612D9565B75",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB1DAF0_294B_C1D3_41C3_357DA7CF5FB6_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56529720_4284_457B_41AB_1D6CFF956DCD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_54380B46_4717_2FF5_41C7_F117A9A7D931",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DC58E3_2BE5_BC32_41AA_13F1751E45DA_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B0301B_4283_DB4D_41C5_9CD15F1C7BAA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_564F6723_4284_457E_41CE_9988F3DDCA0E",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB99717_2948_C05C_41C2_9081E5372DE9_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564EC724_4284_457A_41C7_E65E99B90C74",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_55CFAB42_4717_2FED_41CD_4F02DBA9CA48",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3882AA2A_2BE5_BC32_41B5_F182B952C8EF_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B19014_4283_DB5B_41C4_FBB460488F9D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_265B4F0F_3789_8127_417C_506DBF6B78D8",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C569846_2948_C03F_41AB_E2214544461A_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_564C5725_4284_4545_4195_BEB5706C9A98",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_504C5010_4283_DB5B_4192_68E287466AF0",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_38DCD3EB_2BE4_4C32_41BE_935E1E455FBB_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_504C1011_4283_DB5D_41D0_616D7038271A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2665CF18_3789_8129_41C3_78806E47CC69",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BBFD323_2948_4075_4113_8FB8482C2BA0_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5645172D_4284_454A_41CE_588FEFD621D8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2651FF08_3789_8128_41A9_5C92D612708D",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C432B5C_2948_40D3_41B0_1A3678BAF119_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5651A722_4284_457E_41CD_628F284AB709",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_267FCF39_3789_8168_41C1_029D8EE701D6",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_388CDB47_2BE4_7C71_41B2_E1000686E74C_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_51B31012_4283_DB5F_41CE_A4D15D5FEB99",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_26608F1F_3789_8128_41A2_B54236D46E65",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C4359BC_2949_C053_41A5_4E9A6FBBF211_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5641E72F_4284_4545_41C9_26244F5A026B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_2667CF16_3789_8138_41B9_AF45EDA3B4B5",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3BB44E4F_2948_40CD_41B5_2508C6EA9BBD_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56477727_4284_4545_41C9_FAD05F5FA717",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_54377B45_4717_2FF7_41D0_7BAA4E12EB42",
 "class": "AnimatedImageResource",
 "frameDuration": 62
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3884C130_2BE5_CC2F_41BC_2D79E8A72E33_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5438DB45_4717_2FF7_41C4_4DA13EA6EB62",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "width": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter('https://kkn.nathakusuma.com')",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "width": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "maxHeight": 58,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook('https://kkn.nathakusuma.com')",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 120,
 "data": {
  "name": "Button house info"
 },
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "HALAMAN AWAL",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 0,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 130,
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "COBAN KEMBAR",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "width": 90,
 "data": {
  "name": "Button location"
 },
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "label": "SUMBER PITU",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "layout": "absolute",
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "layout": "vertical",
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "itemLabelFontFamily": "Montserrat",
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "paddingRight": 70,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.05,
 "height": "100%",
 "itemOpacity": 1,
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "paddingLeft": 70,
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "absolute",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "layout": "vertical",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 400,
 "width": "15%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "layout": "absolute",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "layout": "absolute",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "layout": "vertical",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "paddingLeft": 60,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 20,
 "class": "Container",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "25%",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "toolTipOpacity": 0.5,
 "shadow": false,
 "right": 0,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "layout": "horizontal",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "layout": "vertical",
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.09vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.09vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "scrollEnabled": true,
 "minWidth": 1,
 "bottom": "0%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "class": "WebFrame",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "layout": "vertical",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.09vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.09vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.09vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.09vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "100%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "shadow": false,
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "toolTipOpacity": 0.5,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "borderSize": 0,
 "right": 10,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "14.22%",
 "maxHeight": 60,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "transparencyActive": false,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "borderSize": 0,
 "right": 20,
 "minWidth": 50,
 "maxWidth": 60,
 "width": "10%",
 "maxHeight": 60,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "10%",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minWidth": 1,
 "maxWidth": 2000,
 "maxHeight": 1000,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "layout": "vertical",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "layout": "horizontal",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "height": 40,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.33vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.33vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.44vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.58vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "fontSize": "3vh",
 "minHeight": 1,
 "width": "46%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 70,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 70,
 "maxWidth": 150,
 "width": "12%",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "data": {
  "name": "Container separator"
 },
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "width": "80%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "30%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "horizontalAlign": "center",
 "transparencyActive": true,
 "minHeight": 70,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 70,
 "maxWidth": 150,
 "width": "12%",
 "maxHeight": 150,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.33vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.33vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.44vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.48vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.48vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "horizontalAlign": "center",
 "fontSize": "3vh",
 "minHeight": 1,
 "width": "46%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "class": "Button",
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.33vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.93vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.44vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.44vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 207,
 "fontSize": 34,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "label": "lorem ipsum",
 "height": 59,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "class": "Button",
 "rollOverBackgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "45%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.57vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.78vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "layout": "horizontal",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "80%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "horizontalAlign": "left",
 "minHeight": 1,
 "width": "25%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minWidth": 1,
 "maxWidth": 200,
 "maxHeight": 200,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "75%",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "height": "100%",
 "paddingTop": 0,
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.44vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.93vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.93vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.93vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.93vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.93vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.83vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.83vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "borderRadius": 0,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
