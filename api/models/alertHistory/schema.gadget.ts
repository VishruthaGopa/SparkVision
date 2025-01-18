import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "alertHistory" model, go to https://sparkvision.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "smPnoYu8slSg",
  fields: {
    description: { type: "string", storageKey: "7PQgOiCrO14D" },
    timestamp: {
      type: "dateTime",
      includeTime: true,
      storageKey: "mKNFhLRIp7zs",
    },
  },
};
