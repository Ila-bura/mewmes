import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDrops = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));
  
  export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className={`ml-auto" ${styles.Absolute}`} drop="right">
        <Dropdown.Toggle as={ThreeDrops} />
  
        <Dropdown.Menu
          className="text-center"
          popperConfig={{ strategy: "fixed" }}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="Edit meme"
          >
            <i className="far fa-edit" />
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label="Delete meme"
          >
            <i className="far fa-trash-alt" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  
  export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
      <Dropdown className={`ml-auto px-3 ${styles.Bars}`} drop="right">
        <Dropdown.Toggle as={ProfileSettings} />
        <Dropdown.Menu>
  
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fas fa-user-pen" /> Edit profile
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/username`)
            }
            aria-label="edit-username"
          >
            <i className="fas fa-user" />
            Change username
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="edit-password"
          >
            <i className="fas fa-lock" />
            Change password
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }