import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createConnectionroleFromDiscriminatorValue} from './createConnectionroleFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Connection, Crmbaseentity, Organization, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Connectionrole extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _category?: number | undefined;
    private _componentstate?: number | undefined;
    private _connection_Role_AsyncOperations?: Asyncoperation[] | undefined;
    private _connection_role_connections1?: Connection[] | undefined;
    private _connection_role_connections2?: Connection[] | undefined;
    private _connectionRole_ProcessSessions?: Processsession[] | undefined;
    private _connectionRole_SyncErrors?: Syncerror[] | undefined;
    private _connectionroleassociation_association?: Connectionrole[] | undefined;
    private _connectionroleassociation_association_referenced?: Connectionrole[] | undefined;
    private _connectionroleid?: string | undefined;
    private _connectionroleidunique?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Gets the category property value. 
     * @returns a integer
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: number | undefined) {
        this._category = value;
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
     * Gets the connection_Role_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get connection_Role_AsyncOperations() {
        return this._connection_Role_AsyncOperations;
    };
    /**
     * Sets the connection_Role_AsyncOperations property value. 
     * @param value Value to set for the Connection_Role_AsyncOperations property.
     */
    public set connection_Role_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._connection_Role_AsyncOperations = value;
    };
    /**
     * Gets the connection_role_connections1 property value. 
     * @returns a connection
     */
    public get connection_role_connections1() {
        return this._connection_role_connections1;
    };
    /**
     * Sets the connection_role_connections1 property value. 
     * @param value Value to set for the connection_role_connections1 property.
     */
    public set connection_role_connections1(value: Connection[] | undefined) {
        this._connection_role_connections1 = value;
    };
    /**
     * Gets the connection_role_connections2 property value. 
     * @returns a connection
     */
    public get connection_role_connections2() {
        return this._connection_role_connections2;
    };
    /**
     * Sets the connection_role_connections2 property value. 
     * @param value Value to set for the connection_role_connections2 property.
     */
    public set connection_role_connections2(value: Connection[] | undefined) {
        this._connection_role_connections2 = value;
    };
    /**
     * Gets the connectionRole_ProcessSessions property value. 
     * @returns a processsession
     */
    public get connectionRole_ProcessSessions() {
        return this._connectionRole_ProcessSessions;
    };
    /**
     * Sets the connectionRole_ProcessSessions property value. 
     * @param value Value to set for the ConnectionRole_ProcessSessions property.
     */
    public set connectionRole_ProcessSessions(value: Processsession[] | undefined) {
        this._connectionRole_ProcessSessions = value;
    };
    /**
     * Gets the connectionRole_SyncErrors property value. 
     * @returns a syncerror
     */
    public get connectionRole_SyncErrors() {
        return this._connectionRole_SyncErrors;
    };
    /**
     * Sets the connectionRole_SyncErrors property value. 
     * @param value Value to set for the ConnectionRole_SyncErrors property.
     */
    public set connectionRole_SyncErrors(value: Syncerror[] | undefined) {
        this._connectionRole_SyncErrors = value;
    };
    /**
     * Gets the connectionroleassociation_association property value. 
     * @returns a connectionrole
     */
    public get connectionroleassociation_association() {
        return this._connectionroleassociation_association;
    };
    /**
     * Sets the connectionroleassociation_association property value. 
     * @param value Value to set for the connectionroleassociation_association property.
     */
    public set connectionroleassociation_association(value: Connectionrole[] | undefined) {
        this._connectionroleassociation_association = value;
    };
    /**
     * Gets the connectionroleassociation_association_referenced property value. 
     * @returns a connectionrole
     */
    public get connectionroleassociation_association_referenced() {
        return this._connectionroleassociation_association_referenced;
    };
    /**
     * Sets the connectionroleassociation_association_referenced property value. 
     * @param value Value to set for the connectionroleassociation_association_referenced property.
     */
    public set connectionroleassociation_association_referenced(value: Connectionrole[] | undefined) {
        this._connectionroleassociation_association_referenced = value;
    };
    /**
     * Gets the connectionroleid property value. 
     * @returns a string
     */
    public get connectionroleid() {
        return this._connectionroleid;
    };
    /**
     * Sets the connectionroleid property value. 
     * @param value Value to set for the connectionroleid property.
     */
    public set connectionroleid(value: string | undefined) {
        this._connectionroleid = value;
    };
    /**
     * Gets the connectionroleidunique property value. 
     * @returns a string
     */
    public get connectionroleidunique() {
        return this._connectionroleidunique;
    };
    /**
     * Sets the connectionroleidunique property value. 
     * @param value Value to set for the connectionroleidunique property.
     */
    public set connectionroleidunique(value: string | undefined) {
        this._connectionroleidunique = value;
    };
    /**
     * Instantiates a new connectionrole and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Connectionrole)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Connectionrole)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Connectionrole)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Connectionrole)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Connectionrole)._organizationid_value = n.getStringValue(); },
            "category": (o, n) => { (o as unknown as Connectionrole).category = n.getNumberValue(); },
            "componentstate": (o, n) => { (o as unknown as Connectionrole).componentstate = n.getNumberValue(); },
            "connection_Role_AsyncOperations": (o, n) => { (o as unknown as Connectionrole).connection_Role_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "connection_role_connections1": (o, n) => { (o as unknown as Connectionrole).connection_role_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "connection_role_connections2": (o, n) => { (o as unknown as Connectionrole).connection_role_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "connectionRole_ProcessSessions": (o, n) => { (o as unknown as Connectionrole).connectionRole_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "connectionRole_SyncErrors": (o, n) => { (o as unknown as Connectionrole).connectionRole_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "connectionroleassociation_association": (o, n) => { (o as unknown as Connectionrole).connectionroleassociation_association = n.getCollectionOfObjectValues<Connectionrole>(createConnectionroleFromDiscriminatorValue); },
            "connectionroleassociation_association_referenced": (o, n) => { (o as unknown as Connectionrole).connectionroleassociation_association_referenced = n.getCollectionOfObjectValues<Connectionrole>(createConnectionroleFromDiscriminatorValue); },
            "connectionroleid": (o, n) => { (o as unknown as Connectionrole).connectionroleid = n.getStringValue(); },
            "connectionroleidunique": (o, n) => { (o as unknown as Connectionrole).connectionroleidunique = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Connectionrole).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Connectionrole).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Connectionrole).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Connectionrole).description = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Connectionrole).importsequencenumber = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Connectionrole).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Connectionrole).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Connectionrole).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Connectionrole).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Connectionrole).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Connectionrole).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Connectionrole).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Connectionrole).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Connectionrole).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Connectionrole).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Connectionrole).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Connectionrole).statuscode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Connectionrole).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
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
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
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
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("category", this.category);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeCollectionOfObjectValues<Asyncoperation>("connection_Role_AsyncOperations", this.connection_Role_AsyncOperations);
        writer.writeCollectionOfObjectValues<Connection>("connection_role_connections1", this.connection_role_connections1);
        writer.writeCollectionOfObjectValues<Connection>("connection_role_connections2", this.connection_role_connections2);
        writer.writeCollectionOfObjectValues<Processsession>("connectionRole_ProcessSessions", this.connectionRole_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("connectionRole_SyncErrors", this.connectionRole_SyncErrors);
        writer.writeCollectionOfObjectValues<Connectionrole>("connectionroleassociation_association", this.connectionroleassociation_association);
        writer.writeCollectionOfObjectValues<Connectionrole>("connectionroleassociation_association_referenced", this.connectionroleassociation_association_referenced);
        writer.writeStringValue("connectionroleid", this.connectionroleid);
        writer.writeStringValue("connectionroleidunique", this.connectionroleidunique);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
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
