import React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { LanguageContext } from "../../context";
import { Check } from "@mui/icons-material";

export const LanguageSelection = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const { currentLanguage, setLanguage } = React.useContext(LanguageContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClick}>
        <TranslateIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            setLanguage("french");
            handleClose();
          }}
        >
          {currentLanguage === "french" ? (
            <React.Fragment>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Français
            </React.Fragment>
          ) : (
            <ListItemText inset>Français</ListItemText>
          )}
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("english");
            handleClose();
          }}
        >
          {currentLanguage === "english" ? (
            <React.Fragment>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              English
            </React.Fragment>
          ) : (
            <ListItemText inset>English</ListItemText>
          )}
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
