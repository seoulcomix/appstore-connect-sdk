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
import type { AppRelationshipsEndUserLicenseAgreementData } from './AppRelationshipsEndUserLicenseAgreementData';
import {
    AppRelationshipsEndUserLicenseAgreementDataFromJSON,
    AppRelationshipsEndUserLicenseAgreementDataFromJSONTyped,
    AppRelationshipsEndUserLicenseAgreementDataToJSON,
} from './AppRelationshipsEndUserLicenseAgreementData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppRelationshipsEndUserLicenseAgreement
 */
export interface AppRelationshipsEndUserLicenseAgreement {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsEndUserLicenseAgreement
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsEndUserLicenseAgreementData}
     * @memberof AppRelationshipsEndUserLicenseAgreement
     */
    data?: AppRelationshipsEndUserLicenseAgreementData;
}

/**
 * Check if a given object implements the AppRelationshipsEndUserLicenseAgreement interface.
 */
export function instanceOfAppRelationshipsEndUserLicenseAgreement(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsEndUserLicenseAgreementFromJSON(json: any): AppRelationshipsEndUserLicenseAgreement {
    return AppRelationshipsEndUserLicenseAgreementFromJSONTyped(json, false);
}

export function AppRelationshipsEndUserLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsEndUserLicenseAgreement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsEndUserLicenseAgreementDataFromJSON(json['data']),
    };
}

export function AppRelationshipsEndUserLicenseAgreementToJSON(value?: AppRelationshipsEndUserLicenseAgreement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'data': AppRelationshipsEndUserLicenseAgreementDataToJSON(value.data),
    };
}

