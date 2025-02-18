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
import type { AppPricePointV3RelationshipsTerritoryData } from './AppPricePointV3RelationshipsTerritoryData';
import {
    AppPricePointV3RelationshipsTerritoryDataFromJSON,
    AppPricePointV3RelationshipsTerritoryDataFromJSONTyped,
    AppPricePointV3RelationshipsTerritoryDataToJSON,
} from './AppPricePointV3RelationshipsTerritoryData';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementRelationshipsTerritories
 */
export interface EndUserLicenseAgreementRelationshipsTerritories {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof EndUserLicenseAgreementRelationshipsTerritories
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof EndUserLicenseAgreementRelationshipsTerritories
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppPricePointV3RelationshipsTerritoryData>}
     * @memberof EndUserLicenseAgreementRelationshipsTerritories
     */
    data?: Array<AppPricePointV3RelationshipsTerritoryData>;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementRelationshipsTerritories interface.
 */
export function instanceOfEndUserLicenseAgreementRelationshipsTerritories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EndUserLicenseAgreementRelationshipsTerritoriesFromJSON(json: any): EndUserLicenseAgreementRelationshipsTerritories {
    return EndUserLicenseAgreementRelationshipsTerritoriesFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementRelationshipsTerritoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementRelationshipsTerritories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppPricePointV3RelationshipsTerritoryDataFromJSON)),
    };
}

export function EndUserLicenseAgreementRelationshipsTerritoriesToJSON(value?: EndUserLicenseAgreementRelationshipsTerritories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': RelationshipLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppPricePointV3RelationshipsTerritoryDataToJSON)),
    };
}

