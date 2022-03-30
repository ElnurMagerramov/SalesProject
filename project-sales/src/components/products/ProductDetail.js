import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import { Button, Container } from "reactstrap";

const ProductDetail = ({ categories, product, onSave, onChange, errors }) => {
  return (
    <div className="bg-primary">
      <Container style={{backgroundColor:"white"}} className="py-5">
        <form onSubmit={onSave}>
          <h2>{product.id ? "Update product" : "Add product"}</h2>
          <TextInput
            name="productName"
            label="Product Name"
            value={product.productName}
            onChange={onChange}
            error={errors.productName}
          />

          <SelectInput
            name="categoryId"
            label="Category"
            value={product.categoryId || ""}
            defaultOption="Choose category"
            options={categories.map((category) => ({
              value: category.id,
              text: category.categoryName,
            }))}
            onChange={onChange}
            error={errors.categoryId}
          />
          <TextInput
            name="unitPrice"
            label="Unit Price"
            value={product.unitPrice}
            onChange={onChange}
            error={errors.unitPrice}
          />

          <TextInput
            name="quantityPerUnit"
            label="Quantity Per Unit"
            value={product.quantityPerUnit}
            onChange={onChange}
            error={errors.quantityPerUnit}
          />

          <TextInput
            name="unitsInStock"
            label="Units In Stock"
            value={product.unitsInStock}
            onChange={onChange}
            error={errors.unitsInStock}
          />

          <Button type="submit" className="btn btn-success col-12">
            Save
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ProductDetail;
