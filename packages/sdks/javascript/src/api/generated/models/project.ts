/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ResourceSummaryItem } from './resource-summary-item';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * The Id of the project
     * @type {number}
     * @memberof Project
     */
    id: number;
    /**
     * The id of the user that own the project
     * @type {number}
     * @memberof Project
     */
    user_id: number;
    /**
     * The project\'s name
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * A URL path to the project\'s logo image
     * @type {string}
     * @memberof Project
     */
    logo_url: string | null;
    /**
     * Summary of the resource
     * @type {Array<ResourceSummaryItem>}
     * @memberof Project
     */
    resource_summary?: Array<ResourceSummaryItem>;
    /**
     * The list of the operating system users found in all the servers linked to a project
     * @type {Array<object>}
     * @memberof Project
     */
    os_users: Array<object>;
    /**
     * 
     * @type {UserRelation}
     * @memberof Project
     */
    created_by_user: UserRelation;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Project
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Project
     */
    updated_at: string;
}

