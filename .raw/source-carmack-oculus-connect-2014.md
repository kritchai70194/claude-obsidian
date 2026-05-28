# Carmack Oculus Connect 2014 Keynote

Source: https://singjupost.com/john-carmacks-keynote-oculus-connect-2014-transcript/
Date: September 2014
Context: First Oculus Connect conference. Carmack about one year into his role as Oculus CTO. Talk focused on Gear VR (mobile VR), display physics, latency budgets, async time warp, and platform-level optimization.

## Verbatim engineering quotes

### On latency budgets
"We've got this 20 ms bogey that we want to be under. We want to be under 20 ms on motions-to-photons."

### On Android dynamic frequency scaling
"The better you optimize, the more they hamstring you for it."

### On asynchronous time warp
"This is frame rate insurance. This is not magic where you don't have to worry about performance, but work hard, try to get to 60 frames per second."

### On the GPU latency mismatch
"GPUs are all about throughput right now. They really are not optimized for latency."

### On shipping versus perfection
"Is there value in taking intermediate steps and accepting something that we know isn't right?"

### On display controller behavior
"Even though I'm rendering to this front buffer, the display controller might not be being told every time that hey, you still need to render to this."

### On mobile thermal limits
"If you spin up a fourth rate program with the GPU running there and you turn on the camera and Wi-Fi and decode a video in the background, you're overheating like 20 seconds."

### On vendor cooperation
"Once the ice is broken and everybody believed in the product... then it's a positive cycle."

## Themes

- Latency budgets are non-negotiable: 20ms motion-to-photons is the bogey for presence in VR. Everything else is downstream.
- Async Time Warp as architectural insurance: a way to make graceful degradation a property of the system, not the application. The hot frame still re-projects to head pose even if the app missed the deadline.
- The "good enough is the enemy of perfect" inversion: Carmack explicitly argues for shipping intermediate steps that he knows aren't right. The pragmatic position against waiting for the pure solution.
- Optimization is a negotiation with the platform: Android's DVFS would clock-down when GPU usage looked low, so optimizing the app made performance worse. Required Samsung to allow locked clock rates as the workaround.
- The throughput/latency split: GPUs are designed for throughput; VR needs latency-bounded delivery. Time warp is the bridge.

Carmack here is in full pragmatic-engineer mode: explicit trade-offs visible, latency as the master constraint, single-vendor relationships (Samsung) as the lever, "ship the imperfect thing" as the operating principle.
