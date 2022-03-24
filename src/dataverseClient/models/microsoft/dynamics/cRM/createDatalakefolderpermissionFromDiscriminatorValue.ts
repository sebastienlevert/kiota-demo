import {Datalakefolderpermission} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDatalakefolderpermissionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Datalakefolderpermission {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Datalakefolderpermission();
}
