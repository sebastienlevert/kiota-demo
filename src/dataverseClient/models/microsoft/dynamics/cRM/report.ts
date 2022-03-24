import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createReportcategoryFromDiscriminatorValue} from './createReportcategoryFromDiscriminatorValue';
import {createReportFromDiscriminatorValue} from './createReportFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Businessunit, Crmbaseentity, Principal, Processsession, Reportcategory, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Report extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentreportid_value?: string | undefined;
    private _bodybinary?: string | undefined;
    private _bodybinary_binary?: string | undefined;
    private _bodytext?: string | undefined;
    private _bodyurl?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdinmajorversion?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _customreportxml?: string | undefined;
    private _defaultfilter?: string | undefined;
    private _description?: string | undefined;
    private _filename?: string | undefined;
    private _filesize?: number | undefined;
    private _introducedversion?: string | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _iscustomreport?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _ispersonal?: boolean | undefined;
    private _isscheduledreport?: boolean | undefined;
    private _languagecode?: number | undefined;
    private _mimetype?: string | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _originalbodytext?: string | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _parentreportid?: Report | undefined;
    private _queryinfo?: string | undefined;
    private _rdlhash?: number | undefined;
    private _report_AsyncOperations?: Asyncoperation[] | undefined;
    private _report_parent_report?: Report[] | undefined;
    private _report_ProcessSessions?: Processsession[] | undefined;
    private _report_reportcategories?: Reportcategory[] | undefined;
    private _report_SyncErrors?: Syncerror[] | undefined;
    private _reportid?: string | undefined;
    private _reportidunique?: string | undefined;
    private _reportnameonsrs?: string | undefined;
    private _reporttypecode?: number | undefined;
    private _schedulexml?: string | undefined;
    private _signaturedate?: Date | undefined;
    private _signatureid?: string | undefined;
    private _signaturelcid?: number | undefined;
    private _signaturemajorversion?: number | undefined;
    private _signatureminorversion?: number | undefined;
    private _solutionid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _parentreportid_value property value. 
     * @returns a string
     */
    public get _parentreportid_value() {
        return this.__parentreportid_value;
    };
    /**
     * Sets the _parentreportid_value property value. 
     * @param value Value to set for the _parentreportid_value property.
     */
    public set _parentreportid_value(value: string | undefined) {
        this.__parentreportid_value = value;
    };
    /**
     * Gets the bodybinary property value. 
     * @returns a string
     */
    public get bodybinary() {
        return this._bodybinary;
    };
    /**
     * Sets the bodybinary property value. 
     * @param value Value to set for the bodybinary property.
     */
    public set bodybinary(value: string | undefined) {
        this._bodybinary = value;
    };
    /**
     * Gets the bodybinary_binary property value. 
     * @returns a binary
     */
    public get bodybinary_binary() {
        return this._bodybinary_binary;
    };
    /**
     * Sets the bodybinary_binary property value. 
     * @param value Value to set for the bodybinary_binary property.
     */
    public set bodybinary_binary(value: string | undefined) {
        this._bodybinary_binary = value;
    };
    /**
     * Gets the bodytext property value. 
     * @returns a string
     */
    public get bodytext() {
        return this._bodytext;
    };
    /**
     * Sets the bodytext property value. 
     * @param value Value to set for the bodytext property.
     */
    public set bodytext(value: string | undefined) {
        this._bodytext = value;
    };
    /**
     * Gets the bodyurl property value. 
     * @returns a string
     */
    public get bodyurl() {
        return this._bodyurl;
    };
    /**
     * Sets the bodyurl property value. 
     * @param value Value to set for the bodyurl property.
     */
    public set bodyurl(value: string | undefined) {
        this._bodyurl = value;
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
     * Instantiates a new report and sets the default values.
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
     * Gets the createdinmajorversion property value. 
     * @returns a integer
     */
    public get createdinmajorversion() {
        return this._createdinmajorversion;
    };
    /**
     * Sets the createdinmajorversion property value. 
     * @param value Value to set for the createdinmajorversion property.
     */
    public set createdinmajorversion(value: number | undefined) {
        this._createdinmajorversion = value;
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
     * Gets the customreportxml property value. 
     * @returns a string
     */
    public get customreportxml() {
        return this._customreportxml;
    };
    /**
     * Sets the customreportxml property value. 
     * @param value Value to set for the customreportxml property.
     */
    public set customreportxml(value: string | undefined) {
        this._customreportxml = value;
    };
    /**
     * Gets the defaultfilter property value. 
     * @returns a string
     */
    public get defaultfilter() {
        return this._defaultfilter;
    };
    /**
     * Sets the defaultfilter property value. 
     * @param value Value to set for the defaultfilter property.
     */
    public set defaultfilter(value: string | undefined) {
        this._defaultfilter = value;
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
     * Gets the filename property value. 
     * @returns a string
     */
    public get filename() {
        return this._filename;
    };
    /**
     * Sets the filename property value. 
     * @param value Value to set for the filename property.
     */
    public set filename(value: string | undefined) {
        this._filename = value;
    };
    /**
     * Gets the filesize property value. 
     * @returns a integer
     */
    public get filesize() {
        return this._filesize;
    };
    /**
     * Sets the filesize property value. 
     * @param value Value to set for the filesize property.
     */
    public set filesize(value: number | undefined) {
        this._filesize = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Report)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Report)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Report)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Report)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Report)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Report)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Report)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Report)._owninguser_value = n.getStringValue(); },
            "_parentreportid_value": (o, n) => { (o as unknown as Report)._parentreportid_value = n.getStringValue(); },
            "bodybinary": (o, n) => { (o as unknown as Report).bodybinary = n.getStringValue(); },
            "bodybinary_binary": (o, n) => { (o as unknown as Report).bodybinary_binary = n.getStringValue(); },
            "bodytext": (o, n) => { (o as unknown as Report).bodytext = n.getStringValue(); },
            "bodyurl": (o, n) => { (o as unknown as Report).bodyurl = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Report).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Report).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdinmajorversion": (o, n) => { (o as unknown as Report).createdinmajorversion = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Report).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Report).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "customreportxml": (o, n) => { (o as unknown as Report).customreportxml = n.getStringValue(); },
            "defaultfilter": (o, n) => { (o as unknown as Report).defaultfilter = n.getStringValue(); },
            "description": (o, n) => { (o as unknown as Report).description = n.getStringValue(); },
            "filename": (o, n) => { (o as unknown as Report).filename = n.getStringValue(); },
            "filesize": (o, n) => { (o as unknown as Report).filesize = n.getNumberValue(); },
            "introducedversion": (o, n) => { (o as unknown as Report).introducedversion = n.getStringValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Report).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "iscustomreport": (o, n) => { (o as unknown as Report).iscustomreport = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Report).ismanaged = n.getBooleanValue(); },
            "ispersonal": (o, n) => { (o as unknown as Report).ispersonal = n.getBooleanValue(); },
            "isscheduledreport": (o, n) => { (o as unknown as Report).isscheduledreport = n.getBooleanValue(); },
            "languagecode": (o, n) => { (o as unknown as Report).languagecode = n.getNumberValue(); },
            "mimetype": (o, n) => { (o as unknown as Report).mimetype = n.getStringValue(); },
            "modifiedby": (o, n) => { (o as unknown as Report).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Report).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Report).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Report).name = n.getStringValue(); },
            "originalbodytext": (o, n) => { (o as unknown as Report).originalbodytext = n.getStringValue(); },
            "overwritetime": (o, n) => { (o as unknown as Report).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Report).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Report).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "parentreportid": (o, n) => { (o as unknown as Report).parentreportid = n.getObjectValue<Report>(createReportFromDiscriminatorValue); },
            "queryinfo": (o, n) => { (o as unknown as Report).queryinfo = n.getStringValue(); },
            "rdlhash": (o, n) => { (o as unknown as Report).rdlhash = n.getNumberValue(); },
            "report_AsyncOperations": (o, n) => { (o as unknown as Report).report_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "report_parent_report": (o, n) => { (o as unknown as Report).report_parent_report = n.getCollectionOfObjectValues<Report>(createReportFromDiscriminatorValue); },
            "report_ProcessSessions": (o, n) => { (o as unknown as Report).report_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "report_reportcategories": (o, n) => { (o as unknown as Report).report_reportcategories = n.getCollectionOfObjectValues<Reportcategory>(createReportcategoryFromDiscriminatorValue); },
            "report_SyncErrors": (o, n) => { (o as unknown as Report).report_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "reportid": (o, n) => { (o as unknown as Report).reportid = n.getStringValue(); },
            "reportidunique": (o, n) => { (o as unknown as Report).reportidunique = n.getStringValue(); },
            "reportnameonsrs": (o, n) => { (o as unknown as Report).reportnameonsrs = n.getStringValue(); },
            "reporttypecode": (o, n) => { (o as unknown as Report).reporttypecode = n.getNumberValue(); },
            "schedulexml": (o, n) => { (o as unknown as Report).schedulexml = n.getStringValue(); },
            "signaturedate": (o, n) => { (o as unknown as Report).signaturedate = n.getDateValue(); },
            "signatureid": (o, n) => { (o as unknown as Report).signatureid = n.getStringValue(); },
            "signaturelcid": (o, n) => { (o as unknown as Report).signaturelcid = n.getNumberValue(); },
            "signaturemajorversion": (o, n) => { (o as unknown as Report).signaturemajorversion = n.getNumberValue(); },
            "signatureminorversion": (o, n) => { (o as unknown as Report).signatureminorversion = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Report).solutionid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Report).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Report).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Report).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomreport property value. 
     * @returns a boolean
     */
    public get iscustomreport() {
        return this._iscustomreport;
    };
    /**
     * Sets the iscustomreport property value. 
     * @param value Value to set for the iscustomreport property.
     */
    public set iscustomreport(value: boolean | undefined) {
        this._iscustomreport = value;
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
     * Gets the ispersonal property value. 
     * @returns a boolean
     */
    public get ispersonal() {
        return this._ispersonal;
    };
    /**
     * Sets the ispersonal property value. 
     * @param value Value to set for the ispersonal property.
     */
    public set ispersonal(value: boolean | undefined) {
        this._ispersonal = value;
    };
    /**
     * Gets the isscheduledreport property value. 
     * @returns a boolean
     */
    public get isscheduledreport() {
        return this._isscheduledreport;
    };
    /**
     * Sets the isscheduledreport property value. 
     * @param value Value to set for the isscheduledreport property.
     */
    public set isscheduledreport(value: boolean | undefined) {
        this._isscheduledreport = value;
    };
    /**
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
    };
    /**
     * Gets the mimetype property value. 
     * @returns a string
     */
    public get mimetype() {
        return this._mimetype;
    };
    /**
     * Sets the mimetype property value. 
     * @param value Value to set for the mimetype property.
     */
    public set mimetype(value: string | undefined) {
        this._mimetype = value;
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
     * Gets the originalbodytext property value. 
     * @returns a string
     */
    public get originalbodytext() {
        return this._originalbodytext;
    };
    /**
     * Sets the originalbodytext property value. 
     * @param value Value to set for the originalbodytext property.
     */
    public set originalbodytext(value: string | undefined) {
        this._originalbodytext = value;
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
     * Gets the parentreportid property value. 
     * @returns a report
     */
    public get parentreportid() {
        return this._parentreportid;
    };
    /**
     * Sets the parentreportid property value. 
     * @param value Value to set for the parentreportid property.
     */
    public set parentreportid(value: Report | undefined) {
        this._parentreportid = value;
    };
    /**
     * Gets the queryinfo property value. 
     * @returns a string
     */
    public get queryinfo() {
        return this._queryinfo;
    };
    /**
     * Sets the queryinfo property value. 
     * @param value Value to set for the queryinfo property.
     */
    public set queryinfo(value: string | undefined) {
        this._queryinfo = value;
    };
    /**
     * Gets the rdlhash property value. 
     * @returns a integer
     */
    public get rdlhash() {
        return this._rdlhash;
    };
    /**
     * Sets the rdlhash property value. 
     * @param value Value to set for the rdlhash property.
     */
    public set rdlhash(value: number | undefined) {
        this._rdlhash = value;
    };
    /**
     * Gets the report_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get report_AsyncOperations() {
        return this._report_AsyncOperations;
    };
    /**
     * Sets the report_AsyncOperations property value. 
     * @param value Value to set for the Report_AsyncOperations property.
     */
    public set report_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._report_AsyncOperations = value;
    };
    /**
     * Gets the report_parent_report property value. 
     * @returns a report
     */
    public get report_parent_report() {
        return this._report_parent_report;
    };
    /**
     * Sets the report_parent_report property value. 
     * @param value Value to set for the report_parent_report property.
     */
    public set report_parent_report(value: Report[] | undefined) {
        this._report_parent_report = value;
    };
    /**
     * Gets the report_ProcessSessions property value. 
     * @returns a processsession
     */
    public get report_ProcessSessions() {
        return this._report_ProcessSessions;
    };
    /**
     * Sets the report_ProcessSessions property value. 
     * @param value Value to set for the Report_ProcessSessions property.
     */
    public set report_ProcessSessions(value: Processsession[] | undefined) {
        this._report_ProcessSessions = value;
    };
    /**
     * Gets the report_reportcategories property value. 
     * @returns a reportcategory
     */
    public get report_reportcategories() {
        return this._report_reportcategories;
    };
    /**
     * Sets the report_reportcategories property value. 
     * @param value Value to set for the report_reportcategories property.
     */
    public set report_reportcategories(value: Reportcategory[] | undefined) {
        this._report_reportcategories = value;
    };
    /**
     * Gets the report_SyncErrors property value. 
     * @returns a syncerror
     */
    public get report_SyncErrors() {
        return this._report_SyncErrors;
    };
    /**
     * Sets the report_SyncErrors property value. 
     * @param value Value to set for the Report_SyncErrors property.
     */
    public set report_SyncErrors(value: Syncerror[] | undefined) {
        this._report_SyncErrors = value;
    };
    /**
     * Gets the reportid property value. 
     * @returns a string
     */
    public get reportid() {
        return this._reportid;
    };
    /**
     * Sets the reportid property value. 
     * @param value Value to set for the reportid property.
     */
    public set reportid(value: string | undefined) {
        this._reportid = value;
    };
    /**
     * Gets the reportidunique property value. 
     * @returns a string
     */
    public get reportidunique() {
        return this._reportidunique;
    };
    /**
     * Sets the reportidunique property value. 
     * @param value Value to set for the reportidunique property.
     */
    public set reportidunique(value: string | undefined) {
        this._reportidunique = value;
    };
    /**
     * Gets the reportnameonsrs property value. 
     * @returns a string
     */
    public get reportnameonsrs() {
        return this._reportnameonsrs;
    };
    /**
     * Sets the reportnameonsrs property value. 
     * @param value Value to set for the reportnameonsrs property.
     */
    public set reportnameonsrs(value: string | undefined) {
        this._reportnameonsrs = value;
    };
    /**
     * Gets the reporttypecode property value. 
     * @returns a integer
     */
    public get reporttypecode() {
        return this._reporttypecode;
    };
    /**
     * Sets the reporttypecode property value. 
     * @param value Value to set for the reporttypecode property.
     */
    public set reporttypecode(value: number | undefined) {
        this._reporttypecode = value;
    };
    /**
     * Gets the schedulexml property value. 
     * @returns a string
     */
    public get schedulexml() {
        return this._schedulexml;
    };
    /**
     * Sets the schedulexml property value. 
     * @param value Value to set for the schedulexml property.
     */
    public set schedulexml(value: string | undefined) {
        this._schedulexml = value;
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
        writer.writeStringValue("_parentreportid_value", this._parentreportid_value);
        writer.writeStringValue("bodybinary", this.bodybinary);
        writer.writeStringValue("bodybinary_binary", this.bodybinary_binary);
        writer.writeStringValue("bodytext", this.bodytext);
        writer.writeStringValue("bodyurl", this.bodyurl);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeNumberValue("createdinmajorversion", this.createdinmajorversion);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("customreportxml", this.customreportxml);
        writer.writeStringValue("defaultfilter", this.defaultfilter);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("filename", this.filename);
        writer.writeNumberValue("filesize", this.filesize);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("iscustomreport", this.iscustomreport);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("ispersonal", this.ispersonal);
        writer.writeBooleanValue("isscheduledreport", this.isscheduledreport);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeStringValue("mimetype", this.mimetype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("originalbodytext", this.originalbodytext);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Report>("parentreportid", this.parentreportid);
        writer.writeStringValue("queryinfo", this.queryinfo);
        writer.writeNumberValue("rdlhash", this.rdlhash);
        writer.writeCollectionOfObjectValues<Asyncoperation>("report_AsyncOperations", this.report_AsyncOperations);
        writer.writeCollectionOfObjectValues<Report>("report_parent_report", this.report_parent_report);
        writer.writeCollectionOfObjectValues<Processsession>("report_ProcessSessions", this.report_ProcessSessions);
        writer.writeCollectionOfObjectValues<Reportcategory>("report_reportcategories", this.report_reportcategories);
        writer.writeCollectionOfObjectValues<Syncerror>("report_SyncErrors", this.report_SyncErrors);
        writer.writeStringValue("reportid", this.reportid);
        writer.writeStringValue("reportidunique", this.reportidunique);
        writer.writeStringValue("reportnameonsrs", this.reportnameonsrs);
        writer.writeNumberValue("reporttypecode", this.reporttypecode);
        writer.writeStringValue("schedulexml", this.schedulexml);
        writer.writeDateValue("signaturedate", this.signaturedate);
        writer.writeStringValue("signatureid", this.signatureid);
        writer.writeNumberValue("signaturelcid", this.signaturelcid);
        writer.writeNumberValue("signaturemajorversion", this.signaturemajorversion);
        writer.writeNumberValue("signatureminorversion", this.signatureminorversion);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the signaturedate property value. 
     * @returns a Date
     */
    public get signaturedate() {
        return this._signaturedate;
    };
    /**
     * Sets the signaturedate property value. 
     * @param value Value to set for the signaturedate property.
     */
    public set signaturedate(value: Date | undefined) {
        this._signaturedate = value;
    };
    /**
     * Gets the signatureid property value. 
     * @returns a string
     */
    public get signatureid() {
        return this._signatureid;
    };
    /**
     * Sets the signatureid property value. 
     * @param value Value to set for the signatureid property.
     */
    public set signatureid(value: string | undefined) {
        this._signatureid = value;
    };
    /**
     * Gets the signaturelcid property value. 
     * @returns a integer
     */
    public get signaturelcid() {
        return this._signaturelcid;
    };
    /**
     * Sets the signaturelcid property value. 
     * @param value Value to set for the signaturelcid property.
     */
    public set signaturelcid(value: number | undefined) {
        this._signaturelcid = value;
    };
    /**
     * Gets the signaturemajorversion property value. 
     * @returns a integer
     */
    public get signaturemajorversion() {
        return this._signaturemajorversion;
    };
    /**
     * Sets the signaturemajorversion property value. 
     * @param value Value to set for the signaturemajorversion property.
     */
    public set signaturemajorversion(value: number | undefined) {
        this._signaturemajorversion = value;
    };
    /**
     * Gets the signatureminorversion property value. 
     * @returns a integer
     */
    public get signatureminorversion() {
        return this._signatureminorversion;
    };
    /**
     * Sets the signatureminorversion property value. 
     * @param value Value to set for the signatureminorversion property.
     */
    public set signatureminorversion(value: number | undefined) {
        this._signatureminorversion = value;
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
