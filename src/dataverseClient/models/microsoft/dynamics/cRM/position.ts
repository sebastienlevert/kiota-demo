import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPositionFromDiscriminatorValue} from './createPositionFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Connection, Crmbaseentity, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Position extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __parentpositionid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _parentpositionid?: Position | undefined;
    private _position_AsyncOperations?: Asyncoperation[] | undefined;
    private _position_connection1?: Connection[] | undefined;
    private _position_connection2?: Connection[] | undefined;
    private _position_parent_position?: Position[] | undefined;
    private _position_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _position_ProcessSession?: Processsession[] | undefined;
    private _position_SyncErrors?: Syncerror[] | undefined;
    private _position_users?: Systemuser[] | undefined;
    private _positionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _parentpositionid_value property value. 
     * @returns a string
     */
    public get _parentpositionid_value() {
        return this.__parentpositionid_value;
    };
    /**
     * Sets the _parentpositionid_value property value. 
     * @param value Value to set for the _parentpositionid_value property.
     */
    public set _parentpositionid_value(value: string | undefined) {
        this.__parentpositionid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new position and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Position)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Position)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Position)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Position)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Position)._organizationid_value = n.getStringValue(); },
            "_parentpositionid_value": (o, n) => { (o as unknown as Position)._parentpositionid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Position)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Position).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Position).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Position).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Position).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Position).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Position).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Position).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Position).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Position).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Position).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Position).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Position).overriddencreatedon = n.getDateValue(); },
            "parentpositionid": (o, n) => { (o as unknown as Position).parentpositionid = n.getObjectValue<Position>(createPositionFromDiscriminatorValue); },
            "position_AsyncOperations": (o, n) => { (o as unknown as Position).position_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "position_connection1": (o, n) => { (o as unknown as Position).position_connection1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "position_connection2": (o, n) => { (o as unknown as Position).position_connection2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "position_parent_position": (o, n) => { (o as unknown as Position).position_parent_position = n.getCollectionOfObjectValues<Position>(createPositionFromDiscriminatorValue); },
            "position_principalobjectattributeaccess": (o, n) => { (o as unknown as Position).position_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "position_ProcessSession": (o, n) => { (o as unknown as Position).position_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "position_SyncErrors": (o, n) => { (o as unknown as Position).position_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "position_users": (o, n) => { (o as unknown as Position).position_users = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "positionid": (o, n) => { (o as unknown as Position).positionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Position).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Position).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Position).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Position).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Position).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Position).versionnumber = n.getNumberValue(); },
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
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the parentpositionid property value. 
     * @returns a position
     */
    public get parentpositionid() {
        return this._parentpositionid;
    };
    /**
     * Sets the parentpositionid property value. 
     * @param value Value to set for the parentpositionid property.
     */
    public set parentpositionid(value: Position | undefined) {
        this._parentpositionid = value;
    };
    /**
     * Gets the position_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get position_AsyncOperations() {
        return this._position_AsyncOperations;
    };
    /**
     * Sets the position_AsyncOperations property value. 
     * @param value Value to set for the position_AsyncOperations property.
     */
    public set position_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._position_AsyncOperations = value;
    };
    /**
     * Gets the position_connection1 property value. 
     * @returns a connection
     */
    public get position_connection1() {
        return this._position_connection1;
    };
    /**
     * Sets the position_connection1 property value. 
     * @param value Value to set for the position_connection1 property.
     */
    public set position_connection1(value: Connection[] | undefined) {
        this._position_connection1 = value;
    };
    /**
     * Gets the position_connection2 property value. 
     * @returns a connection
     */
    public get position_connection2() {
        return this._position_connection2;
    };
    /**
     * Sets the position_connection2 property value. 
     * @param value Value to set for the position_connection2 property.
     */
    public set position_connection2(value: Connection[] | undefined) {
        this._position_connection2 = value;
    };
    /**
     * Gets the position_parent_position property value. 
     * @returns a position
     */
    public get position_parent_position() {
        return this._position_parent_position;
    };
    /**
     * Sets the position_parent_position property value. 
     * @param value Value to set for the position_parent_position property.
     */
    public set position_parent_position(value: Position[] | undefined) {
        this._position_parent_position = value;
    };
    /**
     * Gets the position_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get position_principalobjectattributeaccess() {
        return this._position_principalobjectattributeaccess;
    };
    /**
     * Sets the position_principalobjectattributeaccess property value. 
     * @param value Value to set for the position_principalobjectattributeaccess property.
     */
    public set position_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._position_principalobjectattributeaccess = value;
    };
    /**
     * Gets the position_ProcessSession property value. 
     * @returns a processsession
     */
    public get position_ProcessSession() {
        return this._position_ProcessSession;
    };
    /**
     * Sets the position_ProcessSession property value. 
     * @param value Value to set for the position_ProcessSession property.
     */
    public set position_ProcessSession(value: Processsession[] | undefined) {
        this._position_ProcessSession = value;
    };
    /**
     * Gets the position_SyncErrors property value. 
     * @returns a syncerror
     */
    public get position_SyncErrors() {
        return this._position_SyncErrors;
    };
    /**
     * Sets the position_SyncErrors property value. 
     * @param value Value to set for the Position_SyncErrors property.
     */
    public set position_SyncErrors(value: Syncerror[] | undefined) {
        this._position_SyncErrors = value;
    };
    /**
     * Gets the position_users property value. 
     * @returns a systemuser
     */
    public get position_users() {
        return this._position_users;
    };
    /**
     * Sets the position_users property value. 
     * @param value Value to set for the position_users property.
     */
    public set position_users(value: Systemuser[] | undefined) {
        this._position_users = value;
    };
    /**
     * Gets the positionid property value. 
     * @returns a string
     */
    public get positionid() {
        return this._positionid;
    };
    /**
     * Sets the positionid property value. 
     * @param value Value to set for the positionid property.
     */
    public set positionid(value: string | undefined) {
        this._positionid = value;
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
        writer.writeStringValue("_parentpositionid_value", this._parentpositionid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Position>("parentpositionid", this.parentpositionid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("position_AsyncOperations", this.position_AsyncOperations);
        writer.writeCollectionOfObjectValues<Connection>("position_connection1", this.position_connection1);
        writer.writeCollectionOfObjectValues<Connection>("position_connection2", this.position_connection2);
        writer.writeCollectionOfObjectValues<Position>("position_parent_position", this.position_parent_position);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("position_principalobjectattributeaccess", this.position_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("position_ProcessSession", this.position_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("position_SyncErrors", this.position_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("position_users", this.position_users);
        writer.writeStringValue("positionid", this.positionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
