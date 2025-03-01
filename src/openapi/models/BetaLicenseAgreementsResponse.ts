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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { BetaLicenseAgreement } from './BetaLicenseAgreement';
import {
    BetaLicenseAgreementFromJSON,
    BetaLicenseAgreementFromJSONTyped,
    BetaLicenseAgreementToJSON,
} from './BetaLicenseAgreement';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementsResponse
 */
export interface BetaLicenseAgreementsResponse {
    /**
     * 
     * @type {Array<BetaLicenseAgreement>}
     * @memberof BetaLicenseAgreementsResponse
     */
    data: Array<BetaLicenseAgreement>;
    /**
     * 
     * @type {Array<App>}
     * @memberof BetaLicenseAgreementsResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaLicenseAgreementsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaLicenseAgreementsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaLicenseAgreementsResponse interface.
 */
export function instanceOfBetaLicenseAgreementsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaLicenseAgreementsResponseFromJSON(json: any): BetaLicenseAgreementsResponse {
    return BetaLicenseAgreementsResponseFromJSONTyped(json, false);
}

export function BetaLicenseAgreementsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaLicenseAgreementFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaLicenseAgreementsResponseToJSON(value?: BetaLicenseAgreementsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaLicenseAgreementToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

