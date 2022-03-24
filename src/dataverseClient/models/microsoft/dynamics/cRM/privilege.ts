import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createRoleFromDiscriminatorValue} from './createRoleFromDiscriminatorValue';
import {createRoletemplateFromDiscriminatorValue} from './createRoletemplateFromDiscriminatorValue';
import {createSolutionFromDiscriminatorValue} from './createSolutionFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Role, Roletemplate, Solution} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Privilege extends Crmbaseentity implements Parsable {
    private _accessright?: number | undefined;
    private _canbebasic?: boolean | undefined;
    private _canbedeep?: boolean | undefined;
    private _canbeentityreference?: boolean | undefined;
    private _canbeglobal?: boolean | undefined;
    private _canbelocal?: boolean | undefined;
    private _canbeparententityreference?: boolean | undefined;
    private _componentstate?: number | undefined;
    private _introducedversion?: string | undefined;
    private _ismanaged?: boolean | undefined;
    private _name?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _privilege_AsyncOperations?: Asyncoperation[] | undefined;
    private _privilege_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _privilegeid?: string | undefined;
    private _privilegerowid?: string | undefined;
    private _roleprivileges_association?: Role[] | undefined;
    private _roletemplateprivileges_association?: Roletemplate[] | undefined;
    private _solution_privilege?: Solution | undefined;
    private _solutionid?: string | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the accessright property value. 
     * @returns a integer
     */
    public get accessright() {
        return this._accessright;
    };
    /**
     * Sets the accessright property value. 
     * @param value Value to set for the accessright property.
     */
    public set accessright(value: number | undefined) {
        this._accessright = value;
    };
    /**
     * Gets the canbebasic property value. 
     * @returns a boolean
     */
    public get canbebasic() {
        return this._canbebasic;
    };
    /**
     * Sets the canbebasic property value. 
     * @param value Value to set for the canbebasic property.
     */
    public set canbebasic(value: boolean | undefined) {
        this._canbebasic = value;
    };
    /**
     * Gets the canbedeep property value. 
     * @returns a boolean
     */
    public get canbedeep() {
        return this._canbedeep;
    };
    /**
     * Sets the canbedeep property value. 
     * @param value Value to set for the canbedeep property.
     */
    public set canbedeep(value: boolean | undefined) {
        this._canbedeep = value;
    };
    /**
     * Gets the canbeentityreference property value. 
     * @returns a boolean
     */
    public get canbeentityreference() {
        return this._canbeentityreference;
    };
    /**
     * Sets the canbeentityreference property value. 
     * @param value Value to set for the canbeentityreference property.
     */
    public set canbeentityreference(value: boolean | undefined) {
        this._canbeentityreference = value;
    };
    /**
     * Gets the canbeglobal property value. 
     * @returns a boolean
     */
    public get canbeglobal() {
        return this._canbeglobal;
    };
    /**
     * Sets the canbeglobal property value. 
     * @param value Value to set for the canbeglobal property.
     */
    public set canbeglobal(value: boolean | undefined) {
        this._canbeglobal = value;
    };
    /**
     * Gets the canbelocal property value. 
     * @returns a boolean
     */
    public get canbelocal() {
        return this._canbelocal;
    };
    /**
     * Sets the canbelocal property value. 
     * @param value Value to set for the canbelocal property.
     */
    public set canbelocal(value: boolean | undefined) {
        this._canbelocal = value;
    };
    /**
     * Gets the canbeparententityreference property value. 
     * @returns a boolean
     */
    public get canbeparententityreference() {
        return this._canbeparententityreference;
    };
    /**
     * Sets the canbeparententityreference property value. 
     * @param value Value to set for the canbeparententityreference property.
     */
    public set canbeparententityreference(value: boolean | undefined) {
        this._canbeparententityreference = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new privilege and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "accessright": (o, n) => { (o as unknown as Privilege).accessright = n.getNumberValue(); },
            "canbebasic": (o, n) => { (o as unknown as Privilege).canbebasic = n.getBooleanValue(); },
            "canbedeep": (o, n) => { (o as unknown as Privilege).canbedeep = n.getBooleanValue(); },
            "canbeentityreference": (o, n) => { (o as unknown as Privilege).canbeentityreference = n.getBooleanValue(); },
            "canbeglobal": (o, n) => { (o as unknown as Privilege).canbeglobal = n.getBooleanValue(); },
            "canbelocal": (o, n) => { (o as unknown as Privilege).canbelocal = n.getBooleanValue(); },
            "canbeparententityreference": (o, n) => { (o as unknown as Privilege).canbeparententityreference = n.getBooleanValue(); },
            "componentstate": (o, n) => { (o as unknown as Privilege).componentstate = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Privilege).introducedversion = n.getStringValue(); },
            "ismanaged": (o, n) => { (o as unknown as Privilege).ismanaged = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Privilege).name = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Privilege).overwritetime = n.getDateValue(); },
            "privilege_AsyncOperations": (o, n) => { (o as unknown as Privilege).privilege_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "privilege_BulkDeleteFailures": (o, n) => { (o as unknown as Privilege).privilege_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "privilegeid": (o, n) => { (o as unknown as Privilege).privilegeid = n.getStringValue(); },
            "privilegerowid": (o, n) => { (o as unknown as Privilege).privilegerowid = n.getStringValue(); },
            "roleprivileges_association": (o, n) => { (o as unknown as Privilege).roleprivileges_association = n.getCollectionOfObjectValues<Role>(createRoleFromDiscriminatorValue); },
            "roletemplateprivileges_association": (o, n) => { (o as unknown as Privilege).roletemplateprivileges_association = n.getCollectionOfObjectValues<Roletemplate>(createRoletemplateFromDiscriminatorValue); },
            "solution_privilege": (o, n) => { (o as unknown as Privilege).solution_privilege = n.getObjectValue<Solution>(createSolutionFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Privilege).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Privilege).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the privilege_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get privilege_AsyncOperations() {
        return this._privilege_AsyncOperations;
    };
    /**
     * Sets the privilege_AsyncOperations property value. 
     * @param value Value to set for the Privilege_AsyncOperations property.
     */
    public set privilege_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._privilege_AsyncOperations = value;
    };
    /**
     * Gets the privilege_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get privilege_BulkDeleteFailures() {
        return this._privilege_BulkDeleteFailures;
    };
    /**
     * Sets the privilege_BulkDeleteFailures property value. 
     * @param value Value to set for the Privilege_BulkDeleteFailures property.
     */
    public set privilege_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._privilege_BulkDeleteFailures = value;
    };
    /**
     * Gets the privilegeid property value. 
     * @returns a string
     */
    public get privilegeid() {
        return this._privilegeid;
    };
    /**
     * Sets the privilegeid property value. 
     * @param value Value to set for the privilegeid property.
     */
    public set privilegeid(value: string | undefined) {
        this._privilegeid = value;
    };
    /**
     * Gets the privilegerowid property value. 
     * @returns a string
     */
    public get privilegerowid() {
        return this._privilegerowid;
    };
    /**
     * Sets the privilegerowid property value. 
     * @param value Value to set for the privilegerowid property.
     */
    public set privilegerowid(value: string | undefined) {
        this._privilegerowid = value;
    };
    /**
     * Gets the roleprivileges_association property value. 
     * @returns a role
     */
    public get roleprivileges_association() {
        return this._roleprivileges_association;
    };
    /**
     * Sets the roleprivileges_association property value. 
     * @param value Value to set for the roleprivileges_association property.
     */
    public set roleprivileges_association(value: Role[] | undefined) {
        this._roleprivileges_association = value;
    };
    /**
     * Gets the roletemplateprivileges_association property value. 
     * @returns a roletemplate
     */
    public get roletemplateprivileges_association() {
        return this._roletemplateprivileges_association;
    };
    /**
     * Sets the roletemplateprivileges_association property value. 
     * @param value Value to set for the roletemplateprivileges_association property.
     */
    public set roletemplateprivileges_association(value: Roletemplate[] | undefined) {
        this._roletemplateprivileges_association = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("accessright", this.accessright);
        writer.writeBooleanValue("canbebasic", this.canbebasic);
        writer.writeBooleanValue("canbedeep", this.canbedeep);
        writer.writeBooleanValue("canbeentityreference", this.canbeentityreference);
        writer.writeBooleanValue("canbeglobal", this.canbeglobal);
        writer.writeBooleanValue("canbelocal", this.canbelocal);
        writer.writeBooleanValue("canbeparententityreference", this.canbeparententityreference);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Asyncoperation>("privilege_AsyncOperations", this.privilege_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("privilege_BulkDeleteFailures", this.privilege_BulkDeleteFailures);
        writer.writeStringValue("privilegeid", this.privilegeid);
        writer.writeStringValue("privilegerowid", this.privilegerowid);
        writer.writeCollectionOfObjectValues<Role>("roleprivileges_association", this.roleprivileges_association);
        writer.writeCollectionOfObjectValues<Roletemplate>("roletemplateprivileges_association", this.roletemplateprivileges_association);
        writer.writeObjectValue<Solution>("solution_privilege", this.solution_privilege);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solution_privilege property value. 
     * @returns a solution
     */
    public get solution_privilege() {
        return this._solution_privilege;
    };
    /**
     * Sets the solution_privilege property value. 
     * @param value Value to set for the solution_privilege property.
     */
    public set solution_privilege(value: Solution | undefined) {
        this._solution_privilege = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
