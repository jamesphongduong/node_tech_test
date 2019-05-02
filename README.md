# Simble Technical Test

## Overview

The purpose of this exercise is for us to understand how you would work on an existing project as part of a team. This includes designing and implementing a simple API service. Whilst we will be looking at the quality of your code, we are also interested in seeing how you would organise a codebase.

## Requirements

You will be required to extend an API written by one of our developers, we expect that you will expand upon and restructure any of the code as you see fit. Please note this should be treated as production ready code.

Please make a note in the project with comments about any assumptions you have made regarding the requirement, or if you have used an online resource to solve a problem.

### Our API has already created one endpoint:

- The first endpoint POST /devices should handle a request containing json data to create a new device.

A device has the following attributes `id, name, location and scenes`, for example:

  <pre>{
  		  "id": "5caff6b1c825196660dbd24b",
  		  "name": "Thermostat",
  		  "location: "Livingroom",
  		  "scenes": ["Leaving for work", "Lights out"]
  }</pre>

### You will need to create two additonal API endpoints:

- The second endpoint POST /scenes will handle a request containing json data to create a new scene.

A scene has the following attributes `id, name, description and date`, for example:

  <pre>{
  		  "id": "5caff6b1c825196660dbd24b"
  		  "name": "Lights out",
  		  "description": "This scene controls the lights and heating at night time",
  		  "date": "01-01-2019"
  }</pre>

- The final endpoint GET /scenes/devices/:id/:date should respond with the following JSON:

The :date parameter format should be YYYYMMDD and not DD-MM-YYYY

  <pre>{
  		  "name": "Lights out",
  		  "date": "01-01-2019",
  		  "count": 3,
  		  "devices": [
  			 "5caff6b1c825196660dbd24b",
  			 "5caff6fff45e1d6683afab73",
  			 "5cb0004c3cecc368cf147178"
  		  ],
  		  "relatedScenes": [
  			 "Leaving for work"
  		  ]
  }</pre>

The `relatedScenes` field contains a list of scenes, these are the other scenes stored on a device that also contain the queried scene. It should not contain duplicates.

The `count` field shows the number of times the scene appeared on a device for the day.

The `devices` field contains a list of ids for all the devices that used this scene for the day. This should be limited to 10 devices.

## Setup Instructions

Please add any instructions for running your project here

## Assumptions

- Date is given in DD-MM-YYYY format for Post /scenes
- For scalabity / reusability of common functions, a helperFunctions folder was created
- Validation was not required as part of this challenge

## Submission

Once complete please update the README to include any instructions of how to set up and run your project then share your public repository containing your code by emailing a URL to frank@simble.io

Your solution will then be evaluated by our team.
