const express = require("express");
const router = express.Router();

const listing = require("../controllers/listing/listingController");

// @path: api/laundry/listing
// @Description: Create listing
router.post("/station/listing", (req, res) =>
    listing.createListing(req, res)
);

// @path: api/laundry/listing/623fea2e9fe8e253fd772601
// @Description: Get listings
router.get("/station/listing", (req, res) =>
    listing.getListings(req, res)
);

// @path: api/laundry/listing/623fea2e9fe8e253fd772601
// @Description: Delete listing
router.delete("/station/listing/:id", (req, res) =>
    listing.deleteListing(req, res)
);

module.exports = router;
