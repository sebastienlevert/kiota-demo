import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createImportfileFromDiscriminatorValue} from './createImportfileFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Importfile, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Import_escaped extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _emailaddress?: string | undefined;
    private _import_AsyncOperations?: Asyncoperation[] | undefined;
    private _import_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _import_ImportFile?: Importfile[] | undefined;
    private _importid?: string | undefined;
    private _modecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _sendnotification?: boolean | undefined;
    private _sequence?: number | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Instantiates a new import_escaped and sets the default values.
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
     * Gets the emailaddress property value. 
     * @returns a string
     */
    public get emailaddress() {
        return this._emailaddress;
    };
    /**
     * Sets the emailaddress property value. 
     * @param value Value to set for the emailaddress property.
     */
    public set emailaddress(value: string | undefined) {
        this._emailaddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Import_escaped)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Import_escaped)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Import_escaped)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Import_escaped)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Import_escaped)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Import_escaped)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Import_escaped)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Import_escaped)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Import_escaped).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Import_escaped).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Import_escaped).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "emailaddress": (o, n) => { (o as unknown as Import_escaped).emailaddress = n.getStringValue(); },
            "import_AsyncOperations": (o, n) => { (o as unknown as Import_escaped).import_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "import_BulkDeleteFailures": (o, n) => { (o as unknown as Import_escaped).import_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "import_ImportFile": (o, n) => { (o as unknown as Import_escaped).import_ImportFile = n.getCollectionOfObjectValues<Importfile>(createImportfileFromDiscriminatorValue); },
            "importid": (o, n) => { (o as unknown as Import_escaped).importid = n.getStringValue(); },
            "modecode": (o, n) => { (o as unknown as Import_escaped).modecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Import_escaped).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Import_escaped).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Import_escaped).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Import_escaped).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Import_escaped).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Import_escaped).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Import_escaped).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Import_escaped).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sendnotification": (o, n) => { (o as unknown as Import_escaped).sendnotification = n.getBooleanValue(); },
            "sequence": (o, n) => { (o as unknown as Import_escaped).sequence = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Import_escaped).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Import_escaped).statuscode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the import_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get import_AsyncOperations() {
        return this._import_AsyncOperations;
    };
    /**
     * Sets the import_AsyncOperations property value. 
     * @param value Value to set for the Import_AsyncOperations property.
     */
    public set import_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._import_AsyncOperations = value;
    };
    /**
     * Gets the import_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get import_BulkDeleteFailures() {
        return this._import_BulkDeleteFailures;
    };
    /**
     * Sets the import_BulkDeleteFailures property value. 
     * @param value Value to set for the Import_BulkDeleteFailures property.
     */
    public set import_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._import_BulkDeleteFailures = value;
    };
    /**
     * Gets the import_ImportFile property value. 
     * @returns a importfile
     */
    public get import_ImportFile() {
        return this._import_ImportFile;
    };
    /**
     * Sets the import_ImportFile property value. 
     * @param value Value to set for the Import_ImportFile property.
     */
    public set import_ImportFile(value: Importfile[] | undefined) {
        this._import_ImportFile = value;
    };
    /**
     * Gets the importid property value. 
     * @returns a string
     */
    public get importid() {
        return this._importid;
    };
    /**
     * Sets the importid property value. 
     * @param value Value to set for the importid property.
     */
    public set importid(value: string | undefined) {
        this._importid = value;
    };
    /**
     * Gets the modecode property value. 
     * @returns a integer
     */
    public get modecode() {
        return this._modecode;
    };
    /**
     * Sets the modecode property value. 
     * @param value Value to set for the modecode property.
     */
    public set modecode(value: number | undefined) {
        this._modecode = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the sendnotification property value. 
     * @returns a boolean
     */
    public get sendnotification() {
        return this._sendnotification;
    };
    /**
     * Sets the sendnotification property value. 
     * @param value Value to set for the sendnotification property.
     */
    public set sendnotification(value: boolean | undefined) {
        this._sendnotification = value;
    };
    /**
     * Gets the sequence property value. 
     * @returns a integer
     */
    public get sequence() {
        return this._sequence;
    };
    /**
     * Sets the sequence property value. 
     * @param value Value to set for the sequence property.
     */
    public set sequence(value: number | undefined) {
        this._sequence = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("emailaddress", this.emailaddress);
        writer.writeCollectionOfObjectValues<Asyncoperation>("import_AsyncOperations", this.import_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("import_BulkDeleteFailures", this.import_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Importfile>("import_ImportFile", this.import_ImportFile);
        writer.writeStringValue("importid", this.importid);
        writer.writeNumberValue("modecode", this.modecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeBooleanValue("sendnotification", this.sendnotification);
        writer.writeNumberValue("sequence", this.sequence);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
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
}
