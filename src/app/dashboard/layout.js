import React from 'react'

function DashboardLayout({children}) {
  return (
    <div className='p-10 m-5 shadow-md'>
      <h1 className='m-3'>WELCOME USER !</h1>
      <p className='bg-green-400'>
      A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a page during rendering.
      </p>
      <ul className='bg-green-200 list-disc'>
        <li>Only the root layout can contain html and body tags.
        When a layout.js and page.js file are defined in the same folder, the layout will wrap the page.</li>
       <li>defaultly server components</li>
       <li>Layouts do not have access to pathname</li>
      </ul>
      {children}
    </div>
  )
}

export default DashboardLayout
