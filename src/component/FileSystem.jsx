import { useState } from 'react';
import '../FileSystem.css';

const FileSystem = ({ data, level = 0 }) => {
  const [dropdown, setdropdown] = useState({});

  const toggleFolder = (id) => {
    setdropdown(prev => ({
      [id]: !prev[id]
    }));
  };

  return (
    <ul className="file_system_cont">
      {data.map((el) => (
        <li key={el.id} className={`file_system__item ${el.isFolder ? 'folder' : 'file'}`}>
          <div 
            className="file_system__item-header"
            onClick={() => el.isFolder && toggleFolder(el.id)}
            style={{ paddingLeft: `${level * 16}px` }}
          >
            {el.isFolder ? (
              <>
                <span className="file_system__icon">
                  {dropdown[el.id] ? '📂' : '📁'}
                </span>
                <span className="file_system__name">{el.name}</span>
                {el.items.length > 0 && (
                  <span className="file_system__expand">
                    {dropdown[el.id] ? '▼' : '▶'}
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="file_system__icon">📄</span>
                <span className="file_system__name">{el.name}</span>
              </>
            )}
          </div>
          
          {el.isFolder && el.items.length > 0 && dropdown[el.id] && (
            <div className="file_system__nested">
              <FileSystem data={el.items} level={level + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FileSystem;