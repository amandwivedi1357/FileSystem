import { useState } from 'react';
import '../FileSystem.css';

const FileSystem = ({ data, level = 0 }) => {
  const [dropdown, setDropdown] = useState({});

  const toggleFolder = (id, e) => {
    e.stopPropagation();
    setDropdown(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleContextMenu = (e, item) => {
    e.preventDefault();
    console.log(`Context menu for ${item.name}`);
  };

  console.log(data)
  return (
    <ul className="file-system">
      {data.map((el) => (
        <li 
          key={el.id} 
          className={`file-system__item ${el.isFolder ? 'folder' : 'file'}`}
          onContextMenu={(e) => handleContextMenu(e, el)}
        >
          <div 
            className="file-system__item-header"
            onClick={(e) => el.isFolder && toggleFolder(el.id, e)}
            style={{ paddingLeft: `${level * 16 + 8}px` }}
          >
            {el.isFolder ? (
              <>
                <span className="file-system__icon">
                  {dropdown[el.id] ? '📂' : '📁'}
                </span>
                <span className="file-system__name">{el.name}</span>
                {el.items.length > 0 && (
                  <span className="file-system__expand">
                    {dropdown[el.id] ? '▼' : '▶'}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="file-system__icon">📄</span>
                <span className="file-system__name">{el.name}</span>
              </>
            )}
          </div>
          
          {el.isFolder && el.items.length > 0 && dropdown[el.id] && (
            <div className="file-system__nested">
              <FileSystem data={el.items} level={level + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FileSystem;