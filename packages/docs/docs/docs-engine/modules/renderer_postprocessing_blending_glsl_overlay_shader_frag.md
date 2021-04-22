---
id: "renderer_postprocessing_blending_glsl_overlay_shader_frag"
title: "Module: renderer/postprocessing/blending/glsl/overlay/shader.frag"
sidebar_label: "renderer/postprocessing/blending/glsl/overlay/shader.frag"
custom_edit_url: null
hide_title: true
---

# Module: renderer/postprocessing/blending/glsl/overlay/shader.frag

## Properties

### default

• **default**: *float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(blend(x.r, y.r), blend(x.g, y.g), blend(x.b, y.b), blend(x.a, y.a));

	return z * opacity + x * (1.0 - opacity);

}
*