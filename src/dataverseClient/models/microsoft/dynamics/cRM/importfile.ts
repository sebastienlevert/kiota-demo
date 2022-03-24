import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createImport_escapedFromDiscriminatorValue} from './createImport_escapedFromDiscriminatorValue';
import {createImportdataFromDiscriminatorValue} from './createImportdataFromDiscriminatorValue';
import {createImportlogFromDiscriminatorValue} from './createImportlogFromDiscriminatorValue';
import {createImportmapFromDiscriminatorValue} from './createImportmapFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Import_escaped, Importdata, Importlog, Importmap, Principal, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Importfile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __importid_value?: string | undefined;
    private __importmapid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __recordsownerid_value?: string | undefined;
    private _additionalheaderrow?: string | undefined;
    private _completedon?: Date | undefined;
    private _content?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datadelimitercode?: number | undefined;
    private _enableduplicatedetection?: boolean | undefined;
    private _entitykeyid?: string | undefined;
    private _failurecount?: number | undefined;
    private _fielddelimitercode?: number | undefined;
    private _filetypecode?: number | undefined;
    private _headerrow?: string | undefined;
    private _importFile_AsyncOperations?: Asyncoperation[] | undefined;
    private _importFile_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _importFile_ImportData?: Importdata[] | undefined;
    private _importfileid?: string | undefined;
    private _importid?: Import_escaped | undefined;
    private _importLog_ImportFile?: Importlog[] | undefined;
    private _importmapid?: Importmap | undefined;
    private _isfirstrowheader?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parsedtablecolumnprefix?: string | undefined;
    private _parsedtablecolumnsnumber?: number | undefined;
    private _parsedtablename?: string | undefined;
    private _partialfailurecount?: number | undefined;
    private _processcode?: number | undefined;
    private _processingstatus?: number | undefined;
    private _progresscounter?: number | undefined;
    private _recordsownerid_systemuser?: Systemuser | undefined;
    private _recordsownerid_team?: Team | undefined;
    private _relatedentitycolumns?: string | undefined;
    private _size?: string | undefined;
    private _source?: string | undefined;
    private _sourceentityname?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _successcount?: number | undefined;
    private _targetentityname?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _totalcount?: number | undefined;
    private _upsertmodecode?: number | undefined;
    private _usesystemmap?: boolean | undefined;
    private _utcconversiontimezonecode?: number | undefined;
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
     * Gets the _importid_value property value. 
     * @returns a string
     */
    public get _importid_value() {
        return this.__importid_value;
    };
    /**
     * Sets the _importid_value property value. 
     * @param value Value to set for the _importid_value property.
     */
    public set _importid_value(value: string | undefined) {
        this.__importid_value = value;
    };
    /**
     * Gets the _importmapid_value property value. 
     * @returns a string
     */
    public get _importmapid_value() {
        return this.__importmapid_value;
    };
    /**
     * Sets the _importmapid_value property value. 
     * @param value Value to set for the _importmapid_value property.
     */
    public set _importmapid_value(value: string | undefined) {
        this.__importmapid_value = value;
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
     * Gets the _recordsownerid_value property value. 
     * @returns a string
     */
    public get _recordsownerid_value() {
        return this.__recordsownerid_value;
    };
    /**
     * Sets the _recordsownerid_value property value. 
     * @param value Value to set for the _recordsownerid_value property.
     */
    public set _recordsownerid_value(value: string | undefined) {
        this.__recordsownerid_value = value;
    };
    /**
     * Gets the additionalheaderrow property value. 
     * @returns a string
     */
    public get additionalheaderrow() {
        return this._additionalheaderrow;
    };
    /**
     * Sets the additionalheaderrow property value. 
     * @param value Value to set for the additionalheaderrow property.
     */
    public set additionalheaderrow(value: string | undefined) {
        this._additionalheaderrow = value;
    };
    /**
     * Gets the completedon property value. 
     * @returns a Date
     */
    public get completedon() {
        return this._completedon;
    };
    /**
     * Sets the completedon property value. 
     * @param value Value to set for the completedon property.
     */
    public set completedon(value: Date | undefined) {
        this._completedon = value;
    };
    /**
     * Instantiates a new importfile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. 
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. 
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
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
     * Gets the datadelimitercode property value. 
     * @returns a integer
     */
    public get datadelimitercode() {
        return this._datadelimitercode;
    };
    /**
     * Sets the datadelimitercode property value. 
     * @param value Value to set for the datadelimitercode property.
     */
    public set datadelimitercode(value: number | undefined) {
        this._datadelimitercode = value;
    };
    /**
     * Gets the enableduplicatedetection property value. 
     * @returns a boolean
     */
    public get enableduplicatedetection() {
        return this._enableduplicatedetection;
    };
    /**
     * Sets the enableduplicatedetection property value. 
     * @param value Value to set for the enableduplicatedetection property.
     */
    public set enableduplicatedetection(value: boolean | undefined) {
        this._enableduplicatedetection = value;
    };
    /**
     * Gets the entitykeyid property value. 
     * @returns a string
     */
    public get entitykeyid() {
        return this._entitykeyid;
    };
    /**
     * Sets the entitykeyid property value. 
     * @param value Value to set for the entitykeyid property.
     */
    public set entitykeyid(value: string | undefined) {
        this._entitykeyid = value;
    };
    /**
     * Gets the failurecount property value. 
     * @returns a integer
     */
    public get failurecount() {
        return this._failurecount;
    };
    /**
     * Sets the failurecount property value. 
     * @param value Value to set for the failurecount property.
     */
    public set failurecount(value: number | undefined) {
        this._failurecount = value;
    };
    /**
     * Gets the fielddelimitercode property value. 
     * @returns a integer
     */
    public get fielddelimitercode() {
        return this._fielddelimitercode;
    };
    /**
     * Sets the fielddelimitercode property value. 
     * @param value Value to set for the fielddelimitercode property.
     */
    public set fielddelimitercode(value: number | undefined) {
        this._fielddelimitercode = value;
    };
    /**
     * Gets the filetypecode property value. 
     * @returns a integer
     */
    public get filetypecode() {
        return this._filetypecode;
    };
    /**
     * Sets the filetypecode property value. 
     * @param value Value to set for the filetypecode property.
     */
    public set filetypecode(value: number | undefined) {
        this._filetypecode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Importfile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Importfile)._createdonbehalfby_value = n.getStringValue(); },
            "_importid_value": (o, n) => { (o as unknown as Importfile)._importid_value = n.getStringValue(); },
            "_importmapid_value": (o, n) => { (o as unknown as Importfile)._importmapid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Importfile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Importfile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Importfile)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Importfile)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Importfile)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Importfile)._owninguser_value = n.getStringValue(); },
            "_recordsownerid_value": (o, n) => { (o as unknown as Importfile)._recordsownerid_value = n.getStringValue(); },
            "additionalheaderrow": (o, n) => { (o as unknown as Importfile).additionalheaderrow = n.getStringValue(); },
            "completedon": (o, n) => { (o as unknown as Importfile).completedon = n.getDateValue(); },
            "content": (o, n) => { (o as unknown as Importfile).content = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Importfile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Importfile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Importfile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datadelimitercode": (o, n) => { (o as unknown as Importfile).datadelimitercode = n.getNumberValue(); },
            "enableduplicatedetection": (o, n) => { (o as unknown as Importfile).enableduplicatedetection = n.getBooleanValue(); },
            "entitykeyid": (o, n) => { (o as unknown as Importfile).entitykeyid = n.getStringValue(); },
            "failurecount": (o, n) => { (o as unknown as Importfile).failurecount = n.getNumberValue(); },
            "fielddelimitercode": (o, n) => { (o as unknown as Importfile).fielddelimitercode = n.getNumberValue(); },
            "filetypecode": (o, n) => { (o as unknown as Importfile).filetypecode = n.getNumberValue(); },
            "headerrow": (o, n) => { (o as unknown as Importfile).headerrow = n.getStringValue(); },
            "importFile_AsyncOperations": (o, n) => { (o as unknown as Importfile).importFile_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "importFile_BulkDeleteFailures": (o, n) => { (o as unknown as Importfile).importFile_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "importFile_ImportData": (o, n) => { (o as unknown as Importfile).importFile_ImportData = n.getCollectionOfObjectValues<Importdata>(createImportdataFromDiscriminatorValue); },
            "importfileid": (o, n) => { (o as unknown as Importfile).importfileid = n.getStringValue(); },
            "importid": (o, n) => { (o as unknown as Importfile).importid = n.getObjectValue<Import_escaped>(createImport_escapedFromDiscriminatorValue); },
            "importLog_ImportFile": (o, n) => { (o as unknown as Importfile).importLog_ImportFile = n.getCollectionOfObjectValues<Importlog>(createImportlogFromDiscriminatorValue); },
            "importmapid": (o, n) => { (o as unknown as Importfile).importmapid = n.getObjectValue<Importmap>(createImportmapFromDiscriminatorValue); },
            "isfirstrowheader": (o, n) => { (o as unknown as Importfile).isfirstrowheader = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Importfile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Importfile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Importfile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Importfile).name = n.getStringValue(); },
            "ownerid": (o, n) => { (o as unknown as Importfile).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Importfile).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Importfile).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Importfile).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parsedtablecolumnprefix": (o, n) => { (o as unknown as Importfile).parsedtablecolumnprefix = n.getStringValue(); },
            "parsedtablecolumnsnumber": (o, n) => { (o as unknown as Importfile).parsedtablecolumnsnumber = n.getNumberValue(); },
            "parsedtablename": (o, n) => { (o as unknown as Importfile).parsedtablename = n.getStringValue(); },
            "partialfailurecount": (o, n) => { (o as unknown as Importfile).partialfailurecount = n.getNumberValue(); },
            "processcode": (o, n) => { (o as unknown as Importfile).processcode = n.getNumberValue(); },
            "processingstatus": (o, n) => { (o as unknown as Importfile).processingstatus = n.getNumberValue(); },
            "progresscounter": (o, n) => { (o as unknown as Importfile).progresscounter = n.getNumberValue(); },
            "recordsownerid_systemuser": (o, n) => { (o as unknown as Importfile).recordsownerid_systemuser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "recordsownerid_team": (o, n) => { (o as unknown as Importfile).recordsownerid_team = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "relatedentitycolumns": (o, n) => { (o as unknown as Importfile).relatedentitycolumns = n.getStringValue(); },
            "size": (o, n) => { (o as unknown as Importfile).size = n.getStringValue(); },
            "source": (o, n) => { (o as unknown as Importfile).source = n.getStringValue(); },
            "sourceentityname": (o, n) => { (o as unknown as Importfile).sourceentityname = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Importfile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Importfile).statuscode = n.getNumberValue(); },
            "successcount": (o, n) => { (o as unknown as Importfile).successcount = n.getNumberValue(); },
            "targetentityname": (o, n) => { (o as unknown as Importfile).targetentityname = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Importfile).timezoneruleversionnumber = n.getNumberValue(); },
            "totalcount": (o, n) => { (o as unknown as Importfile).totalcount = n.getNumberValue(); },
            "upsertmodecode": (o, n) => { (o as unknown as Importfile).upsertmodecode = n.getNumberValue(); },
            "usesystemmap": (o, n) => { (o as unknown as Importfile).usesystemmap = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Importfile).utcconversiontimezonecode = n.getNumberValue(); },
        };
    };
    /**
     * Gets the headerrow property value. 
     * @returns a string
     */
    public get headerrow() {
        return this._headerrow;
    };
    /**
     * Sets the headerrow property value. 
     * @param value Value to set for the headerrow property.
     */
    public set headerrow(value: string | undefined) {
        this._headerrow = value;
    };
    /**
     * Gets the importFile_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get importFile_AsyncOperations() {
        return this._importFile_AsyncOperations;
    };
    /**
     * Sets the importFile_AsyncOperations property value. 
     * @param value Value to set for the ImportFile_AsyncOperations property.
     */
    public set importFile_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._importFile_AsyncOperations = value;
    };
    /**
     * Gets the importFile_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get importFile_BulkDeleteFailures() {
        return this._importFile_BulkDeleteFailures;
    };
    /**
     * Sets the importFile_BulkDeleteFailures property value. 
     * @param value Value to set for the ImportFile_BulkDeleteFailures property.
     */
    public set importFile_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._importFile_BulkDeleteFailures = value;
    };
    /**
     * Gets the importFile_ImportData property value. 
     * @returns a importdata
     */
    public get importFile_ImportData() {
        return this._importFile_ImportData;
    };
    /**
     * Sets the importFile_ImportData property value. 
     * @param value Value to set for the ImportFile_ImportData property.
     */
    public set importFile_ImportData(value: Importdata[] | undefined) {
        this._importFile_ImportData = value;
    };
    /**
     * Gets the importfileid property value. 
     * @returns a string
     */
    public get importfileid() {
        return this._importfileid;
    };
    /**
     * Sets the importfileid property value. 
     * @param value Value to set for the importfileid property.
     */
    public set importfileid(value: string | undefined) {
        this._importfileid = value;
    };
    /**
     * Gets the importid property value. 
     * @returns a import_escaped
     */
    public get importid() {
        return this._importid;
    };
    /**
     * Sets the importid property value. 
     * @param value Value to set for the importid property.
     */
    public set importid(value: Import_escaped | undefined) {
        this._importid = value;
    };
    /**
     * Gets the importLog_ImportFile property value. 
     * @returns a importlog
     */
    public get importLog_ImportFile() {
        return this._importLog_ImportFile;
    };
    /**
     * Sets the importLog_ImportFile property value. 
     * @param value Value to set for the ImportLog_ImportFile property.
     */
    public set importLog_ImportFile(value: Importlog[] | undefined) {
        this._importLog_ImportFile = value;
    };
    /**
     * Gets the importmapid property value. 
     * @returns a importmap
     */
    public get importmapid() {
        return this._importmapid;
    };
    /**
     * Sets the importmapid property value. 
     * @param value Value to set for the importmapid property.
     */
    public set importmapid(value: Importmap | undefined) {
        this._importmapid = value;
    };
    /**
     * Gets the isfirstrowheader property value. 
     * @returns a boolean
     */
    public get isfirstrowheader() {
        return this._isfirstrowheader;
    };
    /**
     * Sets the isfirstrowheader property value. 
     * @param value Value to set for the isfirstrowheader property.
     */
    public set isfirstrowheader(value: boolean | undefined) {
        this._isfirstrowheader = value;
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
     * Gets the parsedtablecolumnprefix property value. 
     * @returns a string
     */
    public get parsedtablecolumnprefix() {
        return this._parsedtablecolumnprefix;
    };
    /**
     * Sets the parsedtablecolumnprefix property value. 
     * @param value Value to set for the parsedtablecolumnprefix property.
     */
    public set parsedtablecolumnprefix(value: string | undefined) {
        this._parsedtablecolumnprefix = value;
    };
    /**
     * Gets the parsedtablecolumnsnumber property value. 
     * @returns a integer
     */
    public get parsedtablecolumnsnumber() {
        return this._parsedtablecolumnsnumber;
    };
    /**
     * Sets the parsedtablecolumnsnumber property value. 
     * @param value Value to set for the parsedtablecolumnsnumber property.
     */
    public set parsedtablecolumnsnumber(value: number | undefined) {
        this._parsedtablecolumnsnumber = value;
    };
    /**
     * Gets the parsedtablename property value. 
     * @returns a string
     */
    public get parsedtablename() {
        return this._parsedtablename;
    };
    /**
     * Sets the parsedtablename property value. 
     * @param value Value to set for the parsedtablename property.
     */
    public set parsedtablename(value: string | undefined) {
        this._parsedtablename = value;
    };
    /**
     * Gets the partialfailurecount property value. 
     * @returns a integer
     */
    public get partialfailurecount() {
        return this._partialfailurecount;
    };
    /**
     * Sets the partialfailurecount property value. 
     * @param value Value to set for the partialfailurecount property.
     */
    public set partialfailurecount(value: number | undefined) {
        this._partialfailurecount = value;
    };
    /**
     * Gets the processcode property value. 
     * @returns a integer
     */
    public get processcode() {
        return this._processcode;
    };
    /**
     * Sets the processcode property value. 
     * @param value Value to set for the processcode property.
     */
    public set processcode(value: number | undefined) {
        this._processcode = value;
    };
    /**
     * Gets the processingstatus property value. 
     * @returns a integer
     */
    public get processingstatus() {
        return this._processingstatus;
    };
    /**
     * Sets the processingstatus property value. 
     * @param value Value to set for the processingstatus property.
     */
    public set processingstatus(value: number | undefined) {
        this._processingstatus = value;
    };
    /**
     * Gets the progresscounter property value. 
     * @returns a integer
     */
    public get progresscounter() {
        return this._progresscounter;
    };
    /**
     * Sets the progresscounter property value. 
     * @param value Value to set for the progresscounter property.
     */
    public set progresscounter(value: number | undefined) {
        this._progresscounter = value;
    };
    /**
     * Gets the recordsownerid_systemuser property value. 
     * @returns a systemuser
     */
    public get recordsownerid_systemuser() {
        return this._recordsownerid_systemuser;
    };
    /**
     * Sets the recordsownerid_systemuser property value. 
     * @param value Value to set for the recordsownerid_systemuser property.
     */
    public set recordsownerid_systemuser(value: Systemuser | undefined) {
        this._recordsownerid_systemuser = value;
    };
    /**
     * Gets the recordsownerid_team property value. 
     * @returns a team
     */
    public get recordsownerid_team() {
        return this._recordsownerid_team;
    };
    /**
     * Sets the recordsownerid_team property value. 
     * @param value Value to set for the recordsownerid_team property.
     */
    public set recordsownerid_team(value: Team | undefined) {
        this._recordsownerid_team = value;
    };
    /**
     * Gets the relatedentitycolumns property value. 
     * @returns a string
     */
    public get relatedentitycolumns() {
        return this._relatedentitycolumns;
    };
    /**
     * Sets the relatedentitycolumns property value. 
     * @param value Value to set for the relatedentitycolumns property.
     */
    public set relatedentitycolumns(value: string | undefined) {
        this._relatedentitycolumns = value;
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
        writer.writeStringValue("_importid_value", this._importid_value);
        writer.writeStringValue("_importmapid_value", this._importmapid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_recordsownerid_value", this._recordsownerid_value);
        writer.writeStringValue("additionalheaderrow", this.additionalheaderrow);
        writer.writeDateValue("completedon", this.completedon);
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("datadelimitercode", this.datadelimitercode);
        writer.writeBooleanValue("enableduplicatedetection", this.enableduplicatedetection);
        writer.writeStringValue("entitykeyid", this.entitykeyid);
        writer.writeNumberValue("failurecount", this.failurecount);
        writer.writeNumberValue("fielddelimitercode", this.fielddelimitercode);
        writer.writeNumberValue("filetypecode", this.filetypecode);
        writer.writeStringValue("headerrow", this.headerrow);
        writer.writeCollectionOfObjectValues<Asyncoperation>("importFile_AsyncOperations", this.importFile_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("importFile_BulkDeleteFailures", this.importFile_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Importdata>("importFile_ImportData", this.importFile_ImportData);
        writer.writeStringValue("importfileid", this.importfileid);
        writer.writeObjectValue<Import_escaped>("importid", this.importid);
        writer.writeCollectionOfObjectValues<Importlog>("importLog_ImportFile", this.importLog_ImportFile);
        writer.writeObjectValue<Importmap>("importmapid", this.importmapid);
        writer.writeBooleanValue("isfirstrowheader", this.isfirstrowheader);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("parsedtablecolumnprefix", this.parsedtablecolumnprefix);
        writer.writeNumberValue("parsedtablecolumnsnumber", this.parsedtablecolumnsnumber);
        writer.writeStringValue("parsedtablename", this.parsedtablename);
        writer.writeNumberValue("partialfailurecount", this.partialfailurecount);
        writer.writeNumberValue("processcode", this.processcode);
        writer.writeNumberValue("processingstatus", this.processingstatus);
        writer.writeNumberValue("progresscounter", this.progresscounter);
        writer.writeObjectValue<Systemuser>("recordsownerid_systemuser", this.recordsownerid_systemuser);
        writer.writeObjectValue<Team>("recordsownerid_team", this.recordsownerid_team);
        writer.writeStringValue("relatedentitycolumns", this.relatedentitycolumns);
        writer.writeStringValue("size", this.size);
        writer.writeStringValue("source", this.source);
        writer.writeStringValue("sourceentityname", this.sourceentityname);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("successcount", this.successcount);
        writer.writeStringValue("targetentityname", this.targetentityname);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("totalcount", this.totalcount);
        writer.writeNumberValue("upsertmodecode", this.upsertmodecode);
        writer.writeBooleanValue("usesystemmap", this.usesystemmap);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
    };
    /**
     * Gets the size property value. 
     * @returns a string
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. 
     * @param value Value to set for the size property.
     */
    public set size(value: string | undefined) {
        this._size = value;
    };
    /**
     * Gets the source property value. 
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the sourceentityname property value. 
     * @returns a string
     */
    public get sourceentityname() {
        return this._sourceentityname;
    };
    /**
     * Sets the sourceentityname property value. 
     * @param value Value to set for the sourceentityname property.
     */
    public set sourceentityname(value: string | undefined) {
        this._sourceentityname = value;
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
     * Gets the successcount property value. 
     * @returns a integer
     */
    public get successcount() {
        return this._successcount;
    };
    /**
     * Sets the successcount property value. 
     * @param value Value to set for the successcount property.
     */
    public set successcount(value: number | undefined) {
        this._successcount = value;
    };
    /**
     * Gets the targetentityname property value. 
     * @returns a string
     */
    public get targetentityname() {
        return this._targetentityname;
    };
    /**
     * Sets the targetentityname property value. 
     * @param value Value to set for the targetentityname property.
     */
    public set targetentityname(value: string | undefined) {
        this._targetentityname = value;
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
     * Gets the totalcount property value. 
     * @returns a integer
     */
    public get totalcount() {
        return this._totalcount;
    };
    /**
     * Sets the totalcount property value. 
     * @param value Value to set for the totalcount property.
     */
    public set totalcount(value: number | undefined) {
        this._totalcount = value;
    };
    /**
     * Gets the upsertmodecode property value. 
     * @returns a integer
     */
    public get upsertmodecode() {
        return this._upsertmodecode;
    };
    /**
     * Sets the upsertmodecode property value. 
     * @param value Value to set for the upsertmodecode property.
     */
    public set upsertmodecode(value: number | undefined) {
        this._upsertmodecode = value;
    };
    /**
     * Gets the usesystemmap property value. 
     * @returns a boolean
     */
    public get usesystemmap() {
        return this._usesystemmap;
    };
    /**
     * Sets the usesystemmap property value. 
     * @param value Value to set for the usesystemmap property.
     */
    public set usesystemmap(value: boolean | undefined) {
        this._usesystemmap = value;
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
}
