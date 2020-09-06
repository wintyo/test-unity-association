using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class JSCaller : MonoBehaviour
{
  [DllImport("__Internal")]
  private static extern void JSCall();

  public void onClick() {
    JSCall();
  }
}
