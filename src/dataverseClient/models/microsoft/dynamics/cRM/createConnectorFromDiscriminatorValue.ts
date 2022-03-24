import {Connector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Connector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Connector();
}
