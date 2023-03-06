import React from "react";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Badge,
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
        <Badge
          badgeContent={
            currentLanguage === "french" ? (
              <img
                loading="lazy"
                width="15"
                style={{ flexShrink: 0 }}
                src={`https://flagcdn.com/w20/fr.png`}
                srcSet={`https://flagcdn.com/w40/fr.png 2x`}
                alt=""
              />
            ) : currentLanguage === "english" ? (
              <img
                loading="lazy"
                width="15"
                style={{ flexShrink: 0 }}
                src={`https://flagcdn.com/w20/gb.png`}
                srcSet={`https://flagcdn.com/w40/gb.png 2x`}
                alt=""
              />
            ) : (
              <></>
            )
          }
        >
          <TranslateIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
      >
        <MenuItem
          onClick={() => {
            setLanguage("french");
            handleClose();
          }}
        >
          <React.Fragment>
            <ListItemIcon
              sx={{
                visibility: currentLanguage === "french" ? "visible" : "hidden",
              }}
            >
              <Check />
            </ListItemIcon>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Français
              <img
                loading="lazy"
                width="25"
                style={{ flexShrink: 0 }}
                src={`https://flagcdn.com/w20/fr.png`}
                srcSet={`https://flagcdn.com/w40/fr.png 2x`}
                alt=""
              />
            </Box>
          </React.Fragment>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLanguage("english");
            handleClose();
          }}
        >
          <React.Fragment>
            <ListItemIcon>
              <Check
                sx={{
                  visibility:
                    currentLanguage === "english" ? "visible" : "hidden",
                }}
              />
            </ListItemIcon>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "8px",
              }}
            >
              English
              <img
                loading="lazy"
                width="25"
                style={{ flexShrink: 0 }}
                src={`https://flagcdn.com/w20/gb.png`}
                srcSet={`https://flagcdn.com/w40/gb.png 2x`}
                alt=""
              />
            </Box>
          </React.Fragment>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
