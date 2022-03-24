import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createImportdataFromDiscriminatorValue} from './createImportdataFromDiscriminatorValue';
import {createImportfileFromDiscriminatorValue} from './createImportfileFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Importdata, Importfile, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Importlog extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __importdataid_value?: string | undefined;
    private __importfileid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _additionalinfo?: string | undefined;
    private _columnvalue?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _errordescription?: string | undefined;
    private _errornumber?: number | undefined;
    private _headercolumn?: string | undefined;
    private _importdataid?: Importdata | undefined;
    private _importfileid?: Importfile | undefined;
    private _importLog_AsyncOperations?: Asyncoperation[] | undefined;
    private _importLog_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _importlogid?: string | undefined;
    private _linenumber?: number | undefined;
    private _logphasecode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _sequencenumber?: number | undefined;
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
     * Gets the _importdataid_value property value. 
     * @returns a string
     */
    public get _importdataid_value() {
        return this.__importdataid_value;
    };
    /**
     * Sets the _importdataid_value property value. 
     * @param value Value to set for the _importdataid_value property.
     */
    public set _importdataid_value(value: string | undefined) {
        this.__importdataid_value = value;
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
     * Gets the additionalinfo property value. 
     * @returns a string
     */
    public get additionalinfo() {
        return this._additionalinfo;
    };
    /**
     * Sets the additionalinfo property value. 
     * @param value Value to set for the additionalinfo property.
     */
    public set additionalinfo(value: string | undefined) {
        this._additionalinfo = value;
    };
    /**
     * Gets the columnvalue property value. 
     * @returns a string
     */
    public get columnvalue() {
        return this._columnvalue;
    };
    /**
     * Sets the columnvalue property value. 
     * @param value Value to set for the columnvalue property.
     */
    public set columnvalue(value: string | undefined) {
        this._columnvalue = value;
    };
    /**
     * Instantiates a new importlog and sets the default values.
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
     * Gets the errordescription property value. 
     * @returns a string
     */
    public get errordescription() {
        return this._errordescription;
    };
    /**
     * Sets the errordescription property value. 
     * @param value Value to set for the errordescription property.
     */
    public set errordescription(value: string | undefined) {
        this._errordescription = value;
    };
    /**
     * Gets the errornumber property value. 
     * @returns a integer
     */
    public get errornumber() {
        return this._errornumber;
    };
    /**
     * Sets the errornumber property value. 
     * @param value Value to set for the errornumber property.
     */
    public set errornumber(value: number | undefined) {
        this._errornumber = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Importlog)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Importlog)._createdonbehalfby_value = n.getStringValue(); },
            "_importdataid_value": (o, n) => { (o as unknown as Importlog)._importdataid_value = n.getStringValue(); },
            "_importfileid_value": (o, n) => { (o as unknown as Importlog)._importfileid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Importlog)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Importlog)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Importlog)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Importlog)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Importlog)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Importlog)._owninguser_value = n.getStringValue(); },
            "additionalinfo": (o, n) => { (o as unknown as Importlog).additionalinfo = n.getStringValue(); },
            "columnvalue": (o, n) => { (o as unknown as Importlog).columnvalue = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Importlog).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Importlog).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Importlog).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "errordescription": (o, n) => { (o as unknown as Importlog).errordescription = n.getStringValue(); },
            "errornumber": (o, n) => { (o as unknown as Importlog).errornumber = n.getNumberValue(); },
            "headercolumn": (o, n) => { (o as unknown as Importlog).headercolumn = n.getStringValue(); },
            "importdataid": (o, n) => { (o as unknown as Importlog).importdataid = n.getObjectValue<Importdata>(createImportdataFromDiscriminatorValue); },
            "importfileid": (o, n) => { (o as unknown as Importlog).importfileid = n.getObjectValue<Importfile>(createImportfileFromDiscriminatorValue); },
            "importLog_AsyncOperations": (o, n) => { (o as unknown as Importlog).importLog_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "importLog_BulkDeleteFailures": (o, n) => { (o as unknown as Importlog).importLog_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "importlogid": (o, n) => { (o as unknown as Importlog).importlogid = n.getStringValue(); },
            "linenumber": (o, n) => { (o as unknown as Importlog).linenumber = n.getNumberValue(); },
            "logphasecode": (o, n) => { (o as unknown as Importlog).logphasecode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Importlog).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Importlog).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Importlog).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "ownerid": (o, n) => { (o as unknown as Importlog).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Importlog).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Importlog).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Importlog).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sequencenumber": (o, n) => { (o as unknown as Importlog).sequencenumber = n.getNumberValue(); },
            "statecode": (o, n) => { (o as unknown as Importlog).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Importlog).statuscode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the headercolumn property value. 
     * @returns a string
     */
    public get headercolumn() {
        return this._headercolumn;
    };
    /**
     * Sets the headercolumn property value. 
     * @param value Value to set for the headercolumn property.
     */
    public set headercolumn(value: string | undefined) {
        this._headercolumn = value;
    };
    /**
     * Gets the importdataid property value. 
     * @returns a importdata
     */
    public get importdataid() {
        return this._importdataid;
    };
    /**
     * Sets the importdataid property value. 
     * @param value Value to set for the importdataid property.
     */
    public set importdataid(value: Importdata | undefined) {
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
     * Gets the importLog_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get importLog_AsyncOperations() {
        return this._importLog_AsyncOperations;
    };
    /**
     * Sets the importLog_AsyncOperations property value. 
     * @param value Value to set for the ImportLog_AsyncOperations property.
     */
    public set importLog_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._importLog_AsyncOperations = value;
    };
    /**
     * Gets the importLog_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get importLog_BulkDeleteFailures() {
        return this._importLog_BulkDeleteFailures;
    };
    /**
     * Sets the importLog_BulkDeleteFailures property value. 
     * @param value Value to set for the ImportLog_BulkDeleteFailures property.
     */
    public set importLog_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._importLog_BulkDeleteFailures = value;
    };
    /**
     * Gets the importlogid property value. 
     * @returns a string
     */
    public get importlogid() {
        return this._importlogid;
    };
    /**
     * Sets the importlogid property value. 
     * @param value Value to set for the importlogid property.
     */
    public set importlogid(value: string | undefined) {
        this._importlogid = value;
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
     * Gets the logphasecode property value. 
     * @returns a integer
     */
    public get logphasecode() {
        return this._logphasecode;
    };
    /**
     * Sets the logphasecode property value. 
     * @param value Value to set for the logphasecode property.
     */
    public set logphasecode(value: number | undefined) {
        this._logphasecode = value;
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
     * Gets the sequencenumber property value. 
     * @returns a integer
     */
    public get sequencenumber() {
        return this._sequencenumber;
    };
    /**
     * Sets the sequencenumber property value. 
     * @param value Value to set for the sequencenumber property.
     */
    public set sequencenumber(value: number | undefined) {
        this._sequencenumber = value;
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
        writer.writeStringValue("_importdataid_value", this._importdataid_value);
        writer.writeStringValue("_importfileid_value", this._importfileid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("additionalinfo", this.additionalinfo);
        writer.writeStringValue("columnvalue", this.columnvalue);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("errordescription", this.errordescription);
        writer.writeNumberValue("errornumber", this.errornumber);
        writer.writeStringValue("headercolumn", this.headercolumn);
        writer.writeObjectValue<Importdata>("importdataid", this.importdataid);
        writer.writeObjectValue<Importfile>("importfileid", this.importfileid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("importLog_AsyncOperations", this.importLog_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("importLog_BulkDeleteFailures", this.importLog_BulkDeleteFailures);
        writer.writeStringValue("importlogid", this.importlogid);
        writer.writeNumberValue("linenumber", this.linenumber);
        writer.writeNumberValue("logphasecode", this.logphasecode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("sequencenumber", this.sequencenumber);
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
