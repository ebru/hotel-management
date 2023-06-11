
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface OverviewCellProps {
  title: string;
  data: number | string;
  link?: string;
  renderIcon?: () => JSX.Element;
}

const OverviewCell: FC<OverviewCellProps> = ({ title, data, link, renderIcon }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex items-center ${link ? 'cursor-pointer' : ''}`} onClick={link ? () => navigate(link) : undefined}>
      {renderIcon && renderIcon()}
      <span>{title}: {data}</span>
    </div>
  )
}

export default OverviewCell
