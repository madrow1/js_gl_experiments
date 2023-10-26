main()


function main() {
    var shadercanv = document.querySelector("#shadercanv");
    var gl = shadercanv.getContext("webgl");

    if (gl === null){
        alert(
            "WebGL not supported on this platform"
        )
        return;
    }

    setShaderCanvSize(shadercanv)

    function setShaderCanvSize(shadercanv){
        shadercanv.width = window.innerWidth/2.02;
        shadercanv.height = window.innerHeight/1.3;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
