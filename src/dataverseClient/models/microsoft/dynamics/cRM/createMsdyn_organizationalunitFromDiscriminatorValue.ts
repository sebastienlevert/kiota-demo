import {Msdyn_organizationalunit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_organizationalunitFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_organizationalunit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_organizationalunit();
}
