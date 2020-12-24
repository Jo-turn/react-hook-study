import React, { useState } from 'react'

const content = [
  {
    id: 1,
    tab: 'Section 1',
    content: '난 멋있어',
  },
  {
    id: 2,
    tab: 'Section 2',
    content: '난 최고야',
  },
]

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCrrentIndex] = useState(initialTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCrrentIndex,
  }
}

function App() {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <>
      <div className="App">
        {content.map((section, index) => (
          <button key={section.id} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    </>
  )
}
export default App
