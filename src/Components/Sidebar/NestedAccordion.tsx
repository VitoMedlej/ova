"use client"
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemButton } from '@mui/material';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export const mainCategories = ['Body Care', 'Facial Care', 'Lip Care', 'Hair Care', 'Home Care'];

export const getCategorySubcategories = (category : string) => {
  switch (category) {
    case 'body care':
      return ['Scrubs', 'Lotions', 'Oils', 'Washes', 'Butters', 'Mists', 'Tanning', 'Underarms'];
    case 'facial care':
      return ['Vitamin C', 'Collagen', 'Hyaluronic Acid', 'Vitamin E', 'Moisturizer (2 in 1)', 'Powdered Mask', 'Aloe Vera Mask'];
      case 'hair care':
        return ['Shampoos', 'Conditioners', 'hair Masks', 'Growth Oils'];
    case 'lip care':
      return ['Scrubs', 'Balms (Tinted/Non-tinted)'];
    case 'home care':
      return ['Soaps'];
    default:
      return [];
  }
};
const YourComponent = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);




  return (
    <div>
      {mainCategories.map((category) => (
        <Accordion key={category} sx={{ border: 'none', boxShadow: 'none' }}>
          <AccordionSummary
            expandIcon={<AiOutlineArrowUp />}
            aria-controls={`panel-${category.toLowerCase()}-content`}
            id={`panel-${category.toLowerCase()}-header`}
          >
            <Typography component='h1' sx={{ fontWeight: 600 }}>
              {category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItem
                sx={{ padding: 0, width: '100%' }}
                onClick={() => {
                  setOpen(false);
                  router.push(`/${category.toLowerCase()}/products`);
                }}
              >
                <ListItemButton>
                  <Typography sx={{ fontWeight: 300 }}>View All</Typography>
                </ListItemButton>
              </ListItem>

              {getCategorySubcategories(category).map((subCategory) => (
                <ListItem
                  sx={{ padding: 0, width: '100%' }}
                  key={subCategory}
                  onClick={() => {
                    setOpen(false);
                    router.push(`/${category.toLowerCase()}/products?type=${encodeURIComponent(subCategory).toLowerCase()}`);
                  }}
                >
                  <ListItemButton>
                    <Typography sx={{ fontWeight: 300 }}>{subCategory}</Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default YourComponent;
