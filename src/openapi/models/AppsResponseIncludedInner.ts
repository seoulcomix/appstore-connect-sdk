/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AppClip,
    instanceOfAppClip,
    AppClipFromJSON,
    AppClipFromJSONTyped,
    AppClipToJSON,
} from './AppClip';
import {
    AppCustomProductPage,
    instanceOfAppCustomProductPage,
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import {
    AppEncryptionDeclaration,
    instanceOfAppEncryptionDeclaration,
    AppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationToJSON,
} from './AppEncryptionDeclaration';
import {
    AppEvent,
    instanceOfAppEvent,
    AppEventFromJSON,
    AppEventFromJSONTyped,
    AppEventToJSON,
} from './AppEvent';
import {
    AppInfo,
    instanceOfAppInfo,
    AppInfoFromJSON,
    AppInfoFromJSONTyped,
    AppInfoToJSON,
} from './AppInfo';
import {
    AppStoreVersion,
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import {
    AppStoreVersionExperimentV2,
    instanceOfAppStoreVersionExperimentV2,
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
} from './AppStoreVersionExperimentV2';
import {
    BetaAppLocalization,
    instanceOfBetaAppLocalization,
    BetaAppLocalizationFromJSON,
    BetaAppLocalizationFromJSONTyped,
    BetaAppLocalizationToJSON,
} from './BetaAppLocalization';
import {
    BetaAppReviewDetail,
    instanceOfBetaAppReviewDetail,
    BetaAppReviewDetailFromJSON,
    BetaAppReviewDetailFromJSONTyped,
    BetaAppReviewDetailToJSON,
} from './BetaAppReviewDetail';
import {
    BetaGroup,
    instanceOfBetaGroup,
    BetaGroupFromJSON,
    BetaGroupFromJSONTyped,
    BetaGroupToJSON,
} from './BetaGroup';
import {
    BetaLicenseAgreement,
    instanceOfBetaLicenseAgreement,
    BetaLicenseAgreementFromJSON,
    BetaLicenseAgreementFromJSONTyped,
    BetaLicenseAgreementToJSON,
} from './BetaLicenseAgreement';
import {
    Build,
    instanceOfBuild,
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';
import {
    CiProduct,
    instanceOfCiProduct,
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
} from './CiProduct';
import {
    EndUserLicenseAgreement,
    instanceOfEndUserLicenseAgreement,
    EndUserLicenseAgreementFromJSON,
    EndUserLicenseAgreementFromJSONTyped,
    EndUserLicenseAgreementToJSON,
} from './EndUserLicenseAgreement';
import {
    GameCenterDetail,
    instanceOfGameCenterDetail,
    GameCenterDetailFromJSON,
    GameCenterDetailFromJSONTyped,
    GameCenterDetailToJSON,
} from './GameCenterDetail';
import {
    GameCenterEnabledVersion,
    instanceOfGameCenterEnabledVersion,
    GameCenterEnabledVersionFromJSON,
    GameCenterEnabledVersionFromJSONTyped,
    GameCenterEnabledVersionToJSON,
} from './GameCenterEnabledVersion';
import {
    InAppPurchase,
    instanceOfInAppPurchase,
    InAppPurchaseFromJSON,
    InAppPurchaseFromJSONTyped,
    InAppPurchaseToJSON,
} from './InAppPurchase';
import {
    InAppPurchaseV2,
    instanceOfInAppPurchaseV2,
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
} from './InAppPurchaseV2';
import {
    PrereleaseVersion,
    instanceOfPrereleaseVersion,
    PrereleaseVersionFromJSON,
    PrereleaseVersionFromJSONTyped,
    PrereleaseVersionToJSON,
} from './PrereleaseVersion';
import {
    PromotedPurchase,
    instanceOfPromotedPurchase,
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
} from './PromotedPurchase';
import {
    ReviewSubmission,
    instanceOfReviewSubmission,
    ReviewSubmissionFromJSON,
    ReviewSubmissionFromJSONTyped,
    ReviewSubmissionToJSON,
} from './ReviewSubmission';
import {
    SubscriptionGracePeriod,
    instanceOfSubscriptionGracePeriod,
    SubscriptionGracePeriodFromJSON,
    SubscriptionGracePeriodFromJSONTyped,
    SubscriptionGracePeriodToJSON,
} from './SubscriptionGracePeriod';
import {
    SubscriptionGroup,
    instanceOfSubscriptionGroup,
    SubscriptionGroupFromJSON,
    SubscriptionGroupFromJSONTyped,
    SubscriptionGroupToJSON,
} from './SubscriptionGroup';

/**
 * @type AppsResponseIncludedInner
 * 
 * @export
 */
export type AppsResponseIncludedInner = AppClip | AppCustomProductPage | AppEncryptionDeclaration | AppEvent | AppInfo | AppStoreVersion | AppStoreVersionExperimentV2 | BetaAppLocalization | BetaAppReviewDetail | BetaGroup | BetaLicenseAgreement | Build | CiProduct | EndUserLicenseAgreement | GameCenterDetail | GameCenterEnabledVersion | InAppPurchase | InAppPurchaseV2 | PrereleaseVersion | PromotedPurchase | ReviewSubmission | SubscriptionGracePeriod | SubscriptionGroup;

export function AppsResponseIncludedInnerFromJSON(json: any): AppsResponseIncludedInner {
    return AppsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...AppClipFromJSONTyped(json, true), ...AppCustomProductPageFromJSONTyped(json, true), ...AppEncryptionDeclarationFromJSONTyped(json, true), ...AppEventFromJSONTyped(json, true), ...AppInfoFromJSONTyped(json, true), ...AppStoreVersionFromJSONTyped(json, true), ...AppStoreVersionExperimentV2FromJSONTyped(json, true), ...BetaAppLocalizationFromJSONTyped(json, true), ...BetaAppReviewDetailFromJSONTyped(json, true), ...BetaGroupFromJSONTyped(json, true), ...BetaLicenseAgreementFromJSONTyped(json, true), ...BuildFromJSONTyped(json, true), ...CiProductFromJSONTyped(json, true), ...EndUserLicenseAgreementFromJSONTyped(json, true), ...GameCenterDetailFromJSONTyped(json, true), ...GameCenterEnabledVersionFromJSONTyped(json, true), ...InAppPurchaseFromJSONTyped(json, true), ...InAppPurchaseV2FromJSONTyped(json, true), ...PrereleaseVersionFromJSONTyped(json, true), ...PromotedPurchaseFromJSONTyped(json, true), ...ReviewSubmissionFromJSONTyped(json, true), ...SubscriptionGracePeriodFromJSONTyped(json, true), ...SubscriptionGroupFromJSONTyped(json, true) };
}

export function AppsResponseIncludedInnerToJSON(value?: AppsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppClip(value)) {
        return AppClipToJSON(value as AppClip);
    }
    if (instanceOfAppCustomProductPage(value)) {
        return AppCustomProductPageToJSON(value as AppCustomProductPage);
    }
    if (instanceOfAppEncryptionDeclaration(value)) {
        return AppEncryptionDeclarationToJSON(value as AppEncryptionDeclaration);
    }
    if (instanceOfAppEvent(value)) {
        return AppEventToJSON(value as AppEvent);
    }
    if (instanceOfAppInfo(value)) {
        return AppInfoToJSON(value as AppInfo);
    }
    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }
    if (instanceOfAppStoreVersionExperimentV2(value)) {
        return AppStoreVersionExperimentV2ToJSON(value as AppStoreVersionExperimentV2);
    }
    if (instanceOfBetaAppLocalization(value)) {
        return BetaAppLocalizationToJSON(value as BetaAppLocalization);
    }
    if (instanceOfBetaAppReviewDetail(value)) {
        return BetaAppReviewDetailToJSON(value as BetaAppReviewDetail);
    }
    if (instanceOfBetaGroup(value)) {
        return BetaGroupToJSON(value as BetaGroup);
    }
    if (instanceOfBetaLicenseAgreement(value)) {
        return BetaLicenseAgreementToJSON(value as BetaLicenseAgreement);
    }
    if (instanceOfBuild(value)) {
        return BuildToJSON(value as Build);
    }
    if (instanceOfCiProduct(value)) {
        return CiProductToJSON(value as CiProduct);
    }
    if (instanceOfEndUserLicenseAgreement(value)) {
        return EndUserLicenseAgreementToJSON(value as EndUserLicenseAgreement);
    }
    if (instanceOfGameCenterDetail(value)) {
        return GameCenterDetailToJSON(value as GameCenterDetail);
    }
    if (instanceOfGameCenterEnabledVersion(value)) {
        return GameCenterEnabledVersionToJSON(value as GameCenterEnabledVersion);
    }
    if (instanceOfInAppPurchase(value)) {
        return InAppPurchaseToJSON(value as InAppPurchase);
    }
    if (instanceOfInAppPurchaseV2(value)) {
        return InAppPurchaseV2ToJSON(value as InAppPurchaseV2);
    }
    if (instanceOfPrereleaseVersion(value)) {
        return PrereleaseVersionToJSON(value as PrereleaseVersion);
    }
    if (instanceOfPromotedPurchase(value)) {
        return PromotedPurchaseToJSON(value as PromotedPurchase);
    }
    if (instanceOfReviewSubmission(value)) {
        return ReviewSubmissionToJSON(value as ReviewSubmission);
    }
    if (instanceOfSubscriptionGracePeriod(value)) {
        return SubscriptionGracePeriodToJSON(value as SubscriptionGracePeriod);
    }
    if (instanceOfSubscriptionGroup(value)) {
        return SubscriptionGroupToJSON(value as SubscriptionGroup);
    }

    return {};
}

