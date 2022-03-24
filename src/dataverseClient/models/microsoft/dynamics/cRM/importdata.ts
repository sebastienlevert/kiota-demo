import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createImportfileFromDiscriminatorValue} from './createImportfileFromDiscriminatorValue';
import {createImportlogFromDiscriminatorValue} from './createImportlogFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Importfile, Importlog, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Importdata extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __importfileid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _data?: string | undefined;
    private _errortype?: number | undefined;
    private _haserror?: boolean | undefined;
    private _importData_AsyncOperations?: Asyncoperation[] | undefined;
    private _importData_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _importdataid?: string | undefined;
    private _importfileid?: Importfile | undefined;
    private _importLog_ImportData?: Importlog[] | undefined;
    private _linenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _recordid?: string | undefined;
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
     * Gets the _importfileid_value property value. 
     * @returns a string
     */
    public get _importfileid_value() {
        return this.__importfileid_value;
    };
    /**
     * Sets the _importfileid_value property value. 
     * @param value Value to set for the _importfileid_value property.
     */
    public set _importfileid_value(value: string | undefined) {
        this.__importfileid_value = value;
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
     * Instantiates a new importdata and sets the default values.
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
     * Gets the data property value. 
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. 
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * Gets the errortype property value. 
     * @returns a integer
     */
    public get errortype() {
        return this._errortype;
    };
    /**
     * Sets the errortype property value. 
     * @param value Value to set for the errortype property.
     */
    public set errortype(value: number | undefined) {
        this._errortype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Importdata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Importdata)._createdonbehalfby_value = n.getStringValue(); },
            "_importfileid_value": (o, n) => { (o as unknown as Importdata)._importfileid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Importdata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Importdata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Importdata)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Importdata)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Importdata)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Importdata)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Importdata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Importdata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Importdata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "data": (o, n) => { (o as unknown as Importdata).data = n.getStringValue(); },
            "errortype": (o, n) => { (o as unknown as Importdata).errortype = n.getNumberValue(); },
            "haserror": (o, n) => { (o as unknown as Importdata).haserror = n.getBooleanValue(); },
            "importData_AsyncOperations": (o, n) => { (o as unknown as Importdata).importData_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "importData_BulkDeleteFailures": (o, n) => { (o as unknown as Importdata).importData_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "importdataid": (o, n) => { (o as unknown as Importdata).importdataid = n.getStringValue(); },
            "importfileid": (o, n) => { (o as unknown as Importdata).importfileid = n.getObjectValue<Importfile>(createImportfileFromDiscriminatorValue); },
            "importLog_ImportData": (o, n) => { (o as unknown as Importdata).importLog_ImportData = n.getCollectionOfObjectValues<Importlog>(createImportlogFromDiscriminatorValue); },
            "linenumber": (o, n) => { (o as unknown as Importdata).linenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Importdata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Importdata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Importdata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ownerid": (o, n) => { (o as unknown as Importdata).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Importdata).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Importdata).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Importdata).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "recordid": (o, n) => { (o as unknown as Importdata).recordid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Importdata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Importdata).statuscode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the haserror property value. 
     * @returns a boolean
     */
    public get haserror() {
        return this._haserror;
    };
    /**
     * Sets the haserror property value. 
     * @param value Value to set for the haserror property.
     */
    public set haserror(value: boolean | undefined) {
        this._haserror = value;
    };
    /**
     * Gets the importData_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get importData_AsyncOperations() {
        return this._importData_AsyncOperations;
    };
    /**
     * Sets the importData_AsyncOperations property value. 
     * @param value Value to set for the ImportData_AsyncOperations property.
     */
    public set importData_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._importData_AsyncOperations = value;
    };
    /**
     * Gets the importData_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get importData_BulkDeleteFailures() {
        return this._importData_BulkDeleteFailures;
    };
    /**
     * Sets the importData_BulkDeleteFailures property value. 
     * @param value Value to set for the ImportData_BulkDeleteFailures property.
     */
    public set importData_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._importData_BulkDeleteFailures = value;
    };
    /**
     * Gets the importdataid property value. 
     * @returns a string
     */
    public get importdataid() {
        return this._importdataid;
    };
    /**
     * Sets the importdataid property value. 
     * @param value Value to set for the importdataid property.
     */
    public set importdataid(value: string | undefined) {
        this._importdataid = value;
    };
    /**
     * Gets the importfileid property value. 
     * @returns a importfile
     */
    public get importfileid() {
        return this._importfileid;
    };
    /**
     * Sets the importfileid property value. 
     * @param value Value to set for the importfileid property.
     */
    public set importfileid(value: Importfile | undefined) {
        this._importfileid = value;
    };
    /**
     * Gets the importLog_ImportData property value. 
     * @returns a importlog
     */
    public get importLog_ImportData() {
        return this._importLog_ImportData;
    };
    /**
     * Sets the importLog_ImportData property value. 
     * @param value Value to set for the ImportLog_ImportData property.
     */
    public set importLog_ImportData(value: Importlog[] | undefined) {
        this._importLog_ImportData = value;
    };
    /**
     * Gets the linenumber property value. 
     * @returns a integer
     */
    public get linenumber() {
        return this._linenumber;
    };
    /**
     * Sets the linenumber property value. 
     * @param value Value to set for the linenumber property.
     */
    public set linenumber(value: number | undefined) {
        this._linenumber = value;
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
     * Gets the recordid property value. 
     * @returns a string
     */
    public get recordid() {
        return this._recordid;
    };
    /**
     * Sets the recordid property value. 
     * @param value Value to set for the recordid property.
     */
    public set recordid(value: string | undefined) {
        this._recordid = value;
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
        writer.writeStringValue("_importfileid_value", this._importfileid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("data", this.data);
        writer.writeNumberValue("errortype", this.errortype);
        writer.writeBooleanValue("haserror", this.haserror);
        writer.writeCollectionOfObjectValues<Asyncoperation>("importData_AsyncOperations", this.importData_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("importData_BulkDeleteFailures", this.importData_BulkDeleteFailures);
        writer.writeStringValue("importdataid", this.importdataid);
        writer.writeObjectValue<Importfile>("importfileid", this.importfileid);
        writer.writeCollectionOfObjectValues<Importlog>("importLog_ImportData", this.importLog_ImportData);
        writer.writeNumberValue("linenumber", this.linenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("recordid", this.recordid);
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
