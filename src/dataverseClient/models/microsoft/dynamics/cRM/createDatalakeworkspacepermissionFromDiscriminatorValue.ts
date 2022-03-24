import {Datalakeworkspacepermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatalakeworkspacepermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Datalakeworkspacepermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Datalakeworkspacepermission();
}
