import {Environmentvariabledefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEnvironmentvariabledefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Environmentvariabledefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Environmentvariabledefinition();
}
