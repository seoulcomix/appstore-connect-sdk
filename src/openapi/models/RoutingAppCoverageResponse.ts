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
import type { AppStoreVersion } from './AppStoreVersion';
import {
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { RoutingAppCoverage } from './RoutingAppCoverage';
import {
    RoutingAppCoverageFromJSON,
    RoutingAppCoverageFromJSONTyped,
    RoutingAppCoverageToJSON,
} from './RoutingAppCoverage';

/**
 * 
 * @export
 * @interface RoutingAppCoverageResponse
 */
export interface RoutingAppCoverageResponse {
    /**
     * 
     * @type {RoutingAppCoverage}
     * @memberof RoutingAppCoverageResponse
     */
    data: RoutingAppCoverage;
    /**
     * 
     * @type {Array<AppStoreVersion>}
     * @memberof RoutingAppCoverageResponse
     */
    included?: Array<AppStoreVersion>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof RoutingAppCoverageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the RoutingAppCoverageResponse interface.
 */
export function instanceOfRoutingAppCoverageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function RoutingAppCoverageResponseFromJSON(json: any): RoutingAppCoverageResponse {
    return RoutingAppCoverageResponseFromJSONTyped(json, false);
}

export function RoutingAppCoverageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': RoutingAppCoverageFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function RoutingAppCoverageResponseToJSON(value?: RoutingAppCoverageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': RoutingAppCoverageToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreVersionToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

