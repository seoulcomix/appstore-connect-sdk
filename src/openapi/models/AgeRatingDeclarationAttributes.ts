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

import { exists, mapValues } from '../runtime';
import type { KidsAgeBand } from './KidsAgeBand';
import {
    KidsAgeBandFromJSON,
    KidsAgeBandFromJSONTyped,
    KidsAgeBandToJSON,
} from './KidsAgeBand';

/**
 * 
 * @export
 * @interface AgeRatingDeclarationAttributes
 */
export interface AgeRatingDeclarationAttributes {
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    alcoholTobaccoOrDrugUseOrReferences?: AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    contests?: AgeRatingDeclarationAttributesContestsEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     * @deprecated
     */
    gamblingAndContests?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     */
    gambling?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    gamblingSimulated?: AgeRatingDeclarationAttributesGamblingSimulatedEnum;
    /**
     * 
     * @type {KidsAgeBand}
     * @memberof AgeRatingDeclarationAttributes
     */
    kidsAgeBand?: KidsAgeBand;
    /**
     * 
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     */
    lootBox?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    medicalOrTreatmentInformation?: AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    profanityOrCrudeHumor?: AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    sexualContentGraphicAndNudity?: AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    sexualContentOrNudity?: AgeRatingDeclarationAttributesSexualContentOrNudityEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    horrorOrFearThemes?: AgeRatingDeclarationAttributesHorrorOrFearThemesEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    matureOrSuggestiveThemes?: AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     */
    unrestrictedWebAccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceCartoonOrFantasy?: AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceRealisticProlongedGraphicOrSadistic?: AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    violenceRealistic?: AgeRatingDeclarationAttributesViolenceRealisticEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    ageRatingOverride?: AgeRatingDeclarationAttributesAgeRatingOverrideEnum;
    /**
     * 
     * @type {string}
     * @memberof AgeRatingDeclarationAttributes
     */
    koreaAgeRatingOverride?: AgeRatingDeclarationAttributesKoreaAgeRatingOverrideEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AgeRatingDeclarationAttributes
     * @deprecated
     */
    seventeenPlus?: boolean;
}


/**
 * @export
 */
export const AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum = typeof AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum[keyof typeof AgeRatingDeclarationAttributesAlcoholTobaccoOrDrugUseOrReferencesEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesContestsEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesContestsEnum = typeof AgeRatingDeclarationAttributesContestsEnum[keyof typeof AgeRatingDeclarationAttributesContestsEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesGamblingSimulatedEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesGamblingSimulatedEnum = typeof AgeRatingDeclarationAttributesGamblingSimulatedEnum[keyof typeof AgeRatingDeclarationAttributesGamblingSimulatedEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum = typeof AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum[keyof typeof AgeRatingDeclarationAttributesMedicalOrTreatmentInformationEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum = typeof AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum[keyof typeof AgeRatingDeclarationAttributesProfanityOrCrudeHumorEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum = typeof AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum[keyof typeof AgeRatingDeclarationAttributesSexualContentGraphicAndNudityEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesSexualContentOrNudityEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesSexualContentOrNudityEnum = typeof AgeRatingDeclarationAttributesSexualContentOrNudityEnum[keyof typeof AgeRatingDeclarationAttributesSexualContentOrNudityEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesHorrorOrFearThemesEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesHorrorOrFearThemesEnum = typeof AgeRatingDeclarationAttributesHorrorOrFearThemesEnum[keyof typeof AgeRatingDeclarationAttributesHorrorOrFearThemesEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum = typeof AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum[keyof typeof AgeRatingDeclarationAttributesMatureOrSuggestiveThemesEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum = typeof AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum[keyof typeof AgeRatingDeclarationAttributesViolenceCartoonOrFantasyEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum = typeof AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum[keyof typeof AgeRatingDeclarationAttributesViolenceRealisticProlongedGraphicOrSadisticEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesViolenceRealisticEnum = {
    None: 'NONE',
    InfrequentOrMild: 'INFREQUENT_OR_MILD',
    FrequentOrIntense: 'FREQUENT_OR_INTENSE'
} as const;
export type AgeRatingDeclarationAttributesViolenceRealisticEnum = typeof AgeRatingDeclarationAttributesViolenceRealisticEnum[keyof typeof AgeRatingDeclarationAttributesViolenceRealisticEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesAgeRatingOverrideEnum = {
    None: 'NONE',
    SeventeenPlus: 'SEVENTEEN_PLUS',
    Unrated: 'UNRATED'
} as const;
export type AgeRatingDeclarationAttributesAgeRatingOverrideEnum = typeof AgeRatingDeclarationAttributesAgeRatingOverrideEnum[keyof typeof AgeRatingDeclarationAttributesAgeRatingOverrideEnum];

/**
 * @export
 */
export const AgeRatingDeclarationAttributesKoreaAgeRatingOverrideEnum = {
    None: 'NONE',
    FifteenPlus: 'FIFTEEN_PLUS',
    NineteenPlus: 'NINETEEN_PLUS'
} as const;
export type AgeRatingDeclarationAttributesKoreaAgeRatingOverrideEnum = typeof AgeRatingDeclarationAttributesKoreaAgeRatingOverrideEnum[keyof typeof AgeRatingDeclarationAttributesKoreaAgeRatingOverrideEnum];


/**
 * Check if a given object implements the AgeRatingDeclarationAttributes interface.
 */
export function instanceOfAgeRatingDeclarationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AgeRatingDeclarationAttributesFromJSON(json: any): AgeRatingDeclarationAttributes {
    return AgeRatingDeclarationAttributesFromJSONTyped(json, false);
}

export function AgeRatingDeclarationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AgeRatingDeclarationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alcoholTobaccoOrDrugUseOrReferences': !exists(json, 'alcoholTobaccoOrDrugUseOrReferences') ? undefined : json['alcoholTobaccoOrDrugUseOrReferences'],
        'contests': !exists(json, 'contests') ? undefined : json['contests'],
        'gamblingAndContests': !exists(json, 'gamblingAndContests') ? undefined : json['gamblingAndContests'],
        'gambling': !exists(json, 'gambling') ? undefined : json['gambling'],
        'gamblingSimulated': !exists(json, 'gamblingSimulated') ? undefined : json['gamblingSimulated'],
        'kidsAgeBand': !exists(json, 'kidsAgeBand') ? undefined : KidsAgeBandFromJSON(json['kidsAgeBand']),
        'lootBox': !exists(json, 'lootBox') ? undefined : json['lootBox'],
        'medicalOrTreatmentInformation': !exists(json, 'medicalOrTreatmentInformation') ? undefined : json['medicalOrTreatmentInformation'],
        'profanityOrCrudeHumor': !exists(json, 'profanityOrCrudeHumor') ? undefined : json['profanityOrCrudeHumor'],
        'sexualContentGraphicAndNudity': !exists(json, 'sexualContentGraphicAndNudity') ? undefined : json['sexualContentGraphicAndNudity'],
        'sexualContentOrNudity': !exists(json, 'sexualContentOrNudity') ? undefined : json['sexualContentOrNudity'],
        'horrorOrFearThemes': !exists(json, 'horrorOrFearThemes') ? undefined : json['horrorOrFearThemes'],
        'matureOrSuggestiveThemes': !exists(json, 'matureOrSuggestiveThemes') ? undefined : json['matureOrSuggestiveThemes'],
        'unrestrictedWebAccess': !exists(json, 'unrestrictedWebAccess') ? undefined : json['unrestrictedWebAccess'],
        'violenceCartoonOrFantasy': !exists(json, 'violenceCartoonOrFantasy') ? undefined : json['violenceCartoonOrFantasy'],
        'violenceRealisticProlongedGraphicOrSadistic': !exists(json, 'violenceRealisticProlongedGraphicOrSadistic') ? undefined : json['violenceRealisticProlongedGraphicOrSadistic'],
        'violenceRealistic': !exists(json, 'violenceRealistic') ? undefined : json['violenceRealistic'],
        'ageRatingOverride': !exists(json, 'ageRatingOverride') ? undefined : json['ageRatingOverride'],
        'koreaAgeRatingOverride': !exists(json, 'koreaAgeRatingOverride') ? undefined : json['koreaAgeRatingOverride'],
        'seventeenPlus': !exists(json, 'seventeenPlus') ? undefined : json['seventeenPlus'],
    };
}

export function AgeRatingDeclarationAttributesToJSON(value?: AgeRatingDeclarationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alcoholTobaccoOrDrugUseOrReferences': value.alcoholTobaccoOrDrugUseOrReferences,
        'contests': value.contests,
        'gamblingAndContests': value.gamblingAndContests,
        'gambling': value.gambling,
        'gamblingSimulated': value.gamblingSimulated,
        'kidsAgeBand': KidsAgeBandToJSON(value.kidsAgeBand),
        'lootBox': value.lootBox,
        'medicalOrTreatmentInformation': value.medicalOrTreatmentInformation,
        'profanityOrCrudeHumor': value.profanityOrCrudeHumor,
        'sexualContentGraphicAndNudity': value.sexualContentGraphicAndNudity,
        'sexualContentOrNudity': value.sexualContentOrNudity,
        'horrorOrFearThemes': value.horrorOrFearThemes,
        'matureOrSuggestiveThemes': value.matureOrSuggestiveThemes,
        'unrestrictedWebAccess': value.unrestrictedWebAccess,
        'violenceCartoonOrFantasy': value.violenceCartoonOrFantasy,
        'violenceRealisticProlongedGraphicOrSadistic': value.violenceRealisticProlongedGraphicOrSadistic,
        'violenceRealistic': value.violenceRealistic,
        'ageRatingOverride': value.ageRatingOverride,
        'koreaAgeRatingOverride': value.koreaAgeRatingOverride,
        'seventeenPlus': value.seventeenPlus,
    };
}

