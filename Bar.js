import React from 'react'

export default function Bar(props) {
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type} : </strong>{props.alert.msg}
      </div>
    </div>
  )
}
