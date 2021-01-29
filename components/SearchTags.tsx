import {FC} from 'react'
import PropTypes from 'prop-types'
import {Select} from 'antd'

const {Option} = Select


interface SearchTagsProps {
  options: string[]
}

function handleChange(value) {
  console.log(`selected ${value}`)
}

const SearchTags: FC<SearchTagsProps> = (props) => (
  <Select mode="tags" style={{width: '100%'}} placeholder="Tags Mode" onChange={handleChange}>
    {
      props.options.map((option, i) => (
        <Option
          key={`${option}-${i}`}
          value={option}
        >
          {option}
        </Option>
      ))
    }
  </Select>
)

SearchTags.defaultProps = {
  options: []
}

export default SearchTags