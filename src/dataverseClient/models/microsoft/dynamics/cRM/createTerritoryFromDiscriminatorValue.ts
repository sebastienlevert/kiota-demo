import {Territory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTerritoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Territory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Territory();
}
