 AFRAME.registerComponent('walk-random', {
        init: function () {
          this.direction = new THREE.Vector3();
          this.speed = 0.4 + Math.random() * 0.6;
        },
        tick: function (time, delta) {
          if (Math.random() < 0.005) {
            this.el.object3D.rotation.y = Math.random() * Math.PI * 2;
            this.direction.set(0,0,-1).applyQuaternion(this.el.object3D.quaternion);
          }
          this.el.object3D.position.add(this.direction.clone().multiplyScalar(delta / 1000 * this.speed));
        }
      });

      AFRAME.registerComponent('photo-pose', {
        init: function () {
          this.el.setAttribute('animation-mixer', 'clip: take_photo; loop: once');
        }
      });
  
     