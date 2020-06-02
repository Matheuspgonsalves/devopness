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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Repository } from '../../generated/models';

/**
 * SourceProvidersRepositoriesApiService - Auto-generated
 */
export class SourceProvidersRepositoriesApiService extends ApiBaseService {
    /**
     * 
     * @summary Return a list of all repositories belonging to a current user social provider account
     * @param {string} provider Unique name of the source code provider where the repository is hosted
     */
    public async getAllRepositories(provider: string): Promise<ApiResponse<Array<Repository>>> {
        if (provider === null || provider === undefined) {
            throw new ArgumentNullException('provider', 'getAllRepositories');
        }
        const response = await this.get <Array<Repository>>(`/source-providers/{provider}/repositories`.replace(`{${"provider"}}`, encodeURIComponent(String(provider))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of a repository, by its name
     * @param {string} provider Unique name/Id of the provider where the repository is hosted
     * @param {string} repositoryOwner Nickname/user id of the owner of the repository
     * @param {string} repositoryName The name of the repository to be retrieved
     */
    public async getRepository(provider: string, repositoryOwner: string, repositoryName: string): Promise<ApiResponse<Repository>> {
        if (provider === null || provider === undefined) {
            throw new ArgumentNullException('provider', 'getRepository');
        }
        if (repositoryOwner === null || repositoryOwner === undefined) {
            throw new ArgumentNullException('repositoryOwner', 'getRepository');
        }
        if (repositoryName === null || repositoryName === undefined) {
            throw new ArgumentNullException('repositoryName', 'getRepository');
        }
        const response = await this.get <Repository>(`/source-providers/{provider}/repositories/{repository_owner}/{repository_name}`.replace(`{${"provider"}}`, encodeURIComponent(String(provider))).replace(`{${"repository_owner"}}`, encodeURIComponent(String(repositoryOwner))).replace(`{${"repository_name"}}`, encodeURIComponent(String(repositoryName))));
        return new ApiResponse(response);
    }
}
