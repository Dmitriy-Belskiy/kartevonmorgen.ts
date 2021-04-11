import { FC, useState } from 'react'
import { AutoComplete, Input, SelectProps } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'


function getRandomInt(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min // eslint-disable-line no-mixed-operators
}

const searchResult = (query: string) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      }
    })


const HomeCitySearch: FC = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([])

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : [])
  }

  const onSelect = (value: string) => {
    console.log('onSelect', value)
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 360 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size="large"
        placeholder="Which place would you like to discover?"
        enterButton={<GlobalOutlined/>}

      />
    </AutoComplete>
  )
}


export default HomeCitySearch