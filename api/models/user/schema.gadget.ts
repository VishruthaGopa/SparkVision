import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://sparkvision.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "bMxoDtWJzN3O",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "Kuy1ZubPF4ZK",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "Pw04U1ggfpP8",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "SGYiIGl8asrZ",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "xsq33sGjXVJD",
    },
    firstName: { type: "string", storageKey: "mYjJXksFeST0" },
    googleImageUrl: { type: "url", storageKey: "hLungCUaMHAr" },
    googleProfileId: { type: "string", storageKey: "gNmtTtij2izg" },
    lastName: { type: "string", storageKey: "vjZ1vYlPvU_D" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "Ivde0Ego_A2k",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "npMejRGU97uY",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "rlId52kVnVCZ",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "hyszRseoXz8j",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "DmIsHijmHXEp",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "rgy2WR796Tm5",
    },
  },
};
