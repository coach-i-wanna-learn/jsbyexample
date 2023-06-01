"use client";
import {useCallback, useLayoutEffect, useRef, useState} from 'react'

export default function Editable() {

  const editableRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    console.log(evt)
  }
  const handleInputChange = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  }

  const setRef = useCallback((element: HTMLDivElement | null) => {
    editableRef.current = element
  }, [])

  useLayoutEffect(() => {
    if (editableRef.current) {
      const div = document.createElement('div')
      div.style.position = 'absolute';
      div.style.top = '0';
      div.style.left = '0';
      div.style.width = '100%';
      div.style.height = '100%';
      div.contentEditable = 'true';
      const handleInput = (event: Event) => {
        event.preventDefault();
        console.log(event)
      };
      const handleOnBeforeInput = (event: Event) => {
        event.preventDefault();
        console.log(event)
      };
      div.addEventListener('input', handleInput);
      div.addEventListener('beforeinput', handleOnBeforeInput);

      editableRef.current.append(div)

      return () => {
        div.removeEventListener('input', handleInput);
      };
    }
  })

  return (
    <div ref={setRef}></div>
  )
}