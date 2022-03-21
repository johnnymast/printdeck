/**
 @file      action.js
 @brief     Print Deck Plugin
 @copyright (c) 2022, Johnny Mast
 @license   This source code is licensed under the MIT-style license found in the LICENSE file.
 */

class ProgressAction extends Action {

  /**
   * @classdesc
   * Displays the progress of your printer on a stream deck button.
   *
   * @class ProgressAction
   * @constructor
   * @since 1.0.0
   */
  constructor () {
    super()

    this.actionUUID = 'com.johnnymast.printdeck.progress'

    this.buttonWidth = 144
    this.buttonHeight = 144

    this.canvas = document.createElement('CANVAS')
    this.canvas.width = this.buttonWidth
    this.canvas.height = this.buttonHeight

    this.ctx = this.canvas.getContext('2d')
  }

  /**
   * The stream deck tile has been pressed down.
   *
   * @param {Object} evt
   */
  onKeyDown (evt) {

    console.log(this.canvas.width)

    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'blue'
    this.ctx.fill()

    console.log('keyDown')
    // setTitle('Down', 0)
    // setImage(this.canvas.toDataURL('image/png'), 0)
    //  showAlert()
    logMessage("Button down")
  }

  /**
   * The stream deck tile has been released.
   *
   * @param {Object} evt
   */
  onKeyUp (evt) {
    console.log('KeyUp')



    this.ctx.beginPath()
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillStyle = 'green'
    this.ctx.fill()



    setTitle('Up', 1)
    // setImage(this.canvas.toDataURL('image/png'), 1)
  //  openUrl('https://www.yahoo.com')

    // showOk(this.context)
    // logMessage("Button up")
    getGlobalSettings();
  }
}