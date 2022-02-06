using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestingEvents : MonoBehaviour {

  public event EventHandler OnSpacePressed;

  private void Start(){
    
  }

  private void Update(){
    if (Input.GetKeyDown(KeyCode.Space)){
      //run event only if space event is not null
      OnSpacePressed?.Invoke(this, EventArgs.Empty);
    }
  }
}

//----------------second class using event
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestingEventsSubscriber : MonoBehaviour {

  private void Start(){
    TestingEvents testingEvents = GetComponent<TestingEvents>();
    testingEvents.OnSpacePressed += TestingEvents_OnSpracePressed;
  }

  private void TestingEvents_OnSpacePressed(object sender, EventArgs e){
    Debug.Log("Space!");
  }
}