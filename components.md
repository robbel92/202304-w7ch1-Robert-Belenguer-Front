# Robots App

## Data layer

- Collection of Robots
  - Robot:
    - id: number
    - name: string
    - image: string
    - speed: number
    - strength: number
    - creation-date: string

## Modifications

- loadRobot()
- addRobot()
- removeRobot()
- updateRobot()

## Components

### Store

### State

- Collection of Robots

### RobotsReducer

- loadRobot()
- addRobot()
- removeRobot()
- updateRobot()

### App

- Shows the title of the app ("Robots app") inside the Heading
- Receives the collection of Robots from dataBase
- Receives dispatch()
- Renders the RobotsList component
- Renders the RobotForm

### RobotsList

- Receives the collection of Robots
- Renders as many RobotCard as Robots are in the collection

### RobotCard

- Shows the Robot's name inside a heading
- Receives a Robot
- Receives dispatch()
- handleClick()

- Renders a Button with:

  - text: "delete"
  - actionOnClick: handleClick

  - Renders a Button with:
  - text: "modify"
  - actionOnClick: handleClick

  ### RobotForm

- State:
  - Robot
- handleSubmit()
- Receives dispatch()
- Receives an optional Robot to update
- Shows the input texts for
  - the name of the Robot
  - the image of the Robot (url)
  - the speed of the Robot (1-10)
  - the strength of the Robot (1-10)
  - the creation date of the Robot
- Renders a Button component

  - text: "create" / "modify"
  - actionOnClick: handleSubmit

  ## Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked
