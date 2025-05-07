import {
  Avatar,
  Box,
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { Paragraph } from "app/components/Typography";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const TopSellingTable = () => {
  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>FORMATIONS</Title>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Les formations
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Ècole
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Année
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Niveau
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center">
                    <Avatar src={product.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 7 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: "capitalize" }}>
                  {product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.niveau}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: "/assets/images/products/icademie.png",
    name: "Développeur Multimédia",
    price: "ICADEMIE",
    available: "2022-2023",
    niveau: "Bac+4"
  },
  {
    imgUrl: "/assets/images/products/simplon.png",
    name: "Concepteur Développeur  \n d'applications",
    price: "SIMPLON Marseille",
    available: "2021-2022",
    niveau: "Bac+3"
  },
  {
    imgUrl: "/assets/images/products/wall.jpg",
    name: "Formation Anglais",
    price: "Wall Street English",
    available: "2021-2022 "
  },
  {
    imgUrl: "/assets/images/products/simplon.png",
    name: "Développeur web et \n web mobile",
    price: "SIMPLON Marseille",
    niveau: "Bac+2",
    available: "2021"
  },
  {
    imgUrl: "/assets/images/products/LogoOpquast.png",
    name: "Certification OPQUAST",
    price: "OPQUAST",
    available: "2020"
  },
  {
    imgUrl: "/assets/images/products/ordi.png",
    name: "Formation Initiation \n informatique",
    price: "SIMPLON Marseille",
    available: "2018",
    niveau: ""
  },
  {
    imgUrl: "/assets/images/products/photo.png",
    name: "Formation Photographe",
    price: "Studio Photo Hakima ",
    available: "2015-2017",
    niveau: "Bac"
  }
];

export default TopSellingTable;
